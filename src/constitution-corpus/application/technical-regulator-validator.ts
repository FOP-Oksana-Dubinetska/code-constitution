import { CorpusInvariantError } from "../domain/corpus.js";

export interface NormativeBasisReference {
	readonly id: string;
	readonly source: string;
	readonly revision: string;
}

export interface TechnicalRegulator {
	readonly id: string;
	readonly normativeBasis: readonly NormativeBasisReference[];
	readonly configurationPaths: readonly string[];
}

export interface TechnicalRegulatorRegistry {
	readonly regulators: readonly TechnicalRegulator[];
}

export interface NormativeSourceDeclaration {
	readonly source: string;
	readonly revision: string;
}

export interface RegulatorRepositoryReader {
	readText(path: string): Promise<string>;
	exists(path: string): Promise<boolean>;
}

function escapeRegExp(value: string): string {
	return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function containsNormativeIdentifier(
	source: string,
	identifier: string,
): boolean {
	const escapedIdentifier = escapeRegExp(identifier);

	if (/^kc-\d{4}$/.test(identifier)) {
		return new RegExp(`<a id="${escapedIdentifier}"></a>`).test(source);
	}
	if (/^P\d{2}$/.test(identifier)) {
		return new RegExp(`^## ${escapedIdentifier}\\.`, "m").test(source);
	}
	if (/^(?:BASE|KCR)-[A-Z0-9]+(?:-[A-Z0-9]+)*$/.test(identifier)) {
		return new RegExp(`^### ${escapedIdentifier}\\.`, "m").test(source);
	}

	throw new CorpusInvariantError(
		`Normative basis ID ${identifier} uses an unsupported identifier form.`,
	);
}

function isUnsafeRepositoryPath(path: string): boolean {
	return (
		path.startsWith("/") ||
		/^[A-Za-z]:[\\/]/.test(path) ||
		path.split(/[\\/]/).includes("..")
	);
}

export class TechnicalRegulatorValidator {
	public constructor(private readonly repository: RegulatorRepositoryReader) {}

	public async validate(
		regulators: readonly TechnicalRegulator[],
		sources: readonly NormativeSourceDeclaration[],
	): Promise<void> {
		const regulatorIds = regulators.map(({ id }) => id);
		if (new Set(regulatorIds).size !== regulatorIds.length) {
			throw new CorpusInvariantError(
				"Technical regulator identifiers must be unique.",
			);
		}

		const sourceRevisions = new Map<string, string>();
		for (const source of sources) {
			if (sourceRevisions.has(source.source)) {
				throw new CorpusInvariantError(
					`Normative source ${source.source} is declared more than once.`,
				);
			}
			sourceRevisions.set(source.source, source.revision);
		}

		const sourceCache = new Map<string, string>();
		for (const regulator of regulators) {
			const basisKeys = new Set<string>();
			for (const basis of regulator.normativeBasis) {
				const declaredRevision = sourceRevisions.get(basis.source);
				if (declaredRevision === undefined) {
					throw new CorpusInvariantError(
						`Technical regulator ${regulator.id} cites an undeclared normative source: ${basis.source}.`,
					);
				}
				if (declaredRevision !== basis.revision) {
					throw new CorpusInvariantError(
						`Technical regulator ${regulator.id} cites revision ${basis.revision} for ${basis.source}; declared revision is ${declaredRevision}.`,
					);
				}

				const basisKey = `${basis.source}\u0000${basis.id}`;
				if (basisKeys.has(basisKey)) {
					throw new CorpusInvariantError(
						`Technical regulator ${regulator.id} repeats normative basis ${basis.id}.`,
					);
				}
				basisKeys.add(basisKey);

				let source = sourceCache.get(basis.source);
				if (source === undefined) {
					source = await this.repository.readText(basis.source);
					sourceCache.set(basis.source, source);
				}
				if (!containsNormativeIdentifier(source, basis.id)) {
					throw new CorpusInvariantError(
						`Technical regulator ${regulator.id} cites unresolved normative basis ${basis.id} in ${basis.source}.`,
					);
				}
			}

			const uniquePaths = new Set(regulator.configurationPaths);
			if (uniquePaths.size !== regulator.configurationPaths.length) {
				throw new CorpusInvariantError(
					`Technical regulator ${regulator.id} repeats a configuration path.`,
				);
			}
			for (const configurationPath of regulator.configurationPaths) {
				if (isUnsafeRepositoryPath(configurationPath)) {
					throw new CorpusInvariantError(
						`Technical regulator ${regulator.id} uses an unsafe configuration path: ${configurationPath}.`,
					);
				}
				if (!(await this.repository.exists(configurationPath))) {
					throw new CorpusInvariantError(
						`Technical regulator ${regulator.id} has an unresolved configuration path: ${configurationPath}.`,
					);
				}
			}
		}
	}
}
