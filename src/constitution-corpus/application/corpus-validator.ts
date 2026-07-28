import { CorpusInvariantError, type CorpusIndex } from "../domain/corpus.js";

export interface CanonicalCorpusDeclaration {
	readonly source: string;
	readonly sourceSha256: string;
	readonly provisionNamespace: string;
	readonly provisionCount: number;
}

export class CorpusValidator {
	public validate(
		index: CorpusIndex,
		declaration: CanonicalCorpusDeclaration,
	): void {
		if (index.sourceSha256 !== declaration.sourceSha256) {
			throw new CorpusInvariantError(
				`The corpus SHA-256 differs from the canonical declaration for ${declaration.source}.`,
			);
		}
		if (index.provisions.length !== declaration.provisionCount) {
			throw new CorpusInvariantError(
				`The corpus must contain ${String(declaration.provisionCount)} provisions.`,
			);
		}

		const allowedIdentifier = new RegExp(
			`^${declaration.provisionNamespace}-\\d{4}$`,
		);
		for (const provision of index.provisions) {
			if (!allowedIdentifier.test(provision.id)) {
				throw new CorpusInvariantError(
					`Provision ${provision.id} uses an undeclared namespace.`,
				);
			}
		}
	}
}
