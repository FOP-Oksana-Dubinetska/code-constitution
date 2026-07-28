import { CorpusInvariantError } from "../domain/corpus.js";

export interface RegisteredAct {
	readonly id: string;
	readonly path: string;
	readonly revision: string;
	readonly status: "draft";
}

export interface ActDocumentReader {
	readText(path: string): Promise<string>;
}

export class ActRegistryValidator {
	public constructor(private readonly documentReader: ActDocumentReader) {}

	public async validate(acts: readonly RegisteredAct[]): Promise<void> {
		for (const act of acts) {
			if ((act.status as string) !== "draft") {
				throw new CorpusInvariantError(
					`Act registry status ${String(act.status)} is unavailable during bootstrap.`,
				);
			}

			const source = await this.documentReader.readText(act.path);
			const identifier = /Идентификатор (?:документа|акта): `([^`]+)`\./.exec(
				source,
			)?.[1];
			const revision = /Редакция: `([^`]+)`\./.exec(source)?.[1];
			const draft = /^## Проект/m.test(source);

			if (identifier !== act.id) {
				throw new CorpusInvariantError(
					`Act registry ID ${act.id} does not resolve in ${act.path}.`,
				);
			}
			if (revision !== act.revision) {
				throw new CorpusInvariantError(
					`Act registry revision ${act.revision} does not resolve in ${act.path}.`,
				);
			}
			if (!draft) {
				throw new CorpusInvariantError(
					`Act registry status ${act.status} conflicts with ${act.path}.`,
				);
			}
		}
	}
}
