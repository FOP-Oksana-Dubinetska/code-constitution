import type { CorpusIndex } from "../domain/corpus.js";

export interface SourceHasher {
	hash(source: Uint8Array): string;
}

export interface MarkdownCorpusIndexer {
	index(source: Uint8Array): CorpusIndex;
}

export interface CorpusFileStore {
	read(path: string): Promise<Uint8Array>;
	writeAtomically(path: string, content: Uint8Array): Promise<void>;
}
