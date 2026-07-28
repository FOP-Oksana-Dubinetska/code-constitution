export interface SourceRange {
	readonly startByte: number;
	readonly endByte: number;
}

export interface Provision {
	readonly id: string;
	readonly range: SourceRange;
	readonly sourceBytes: Uint8Array;
}

export interface CorpusIndex {
	readonly sourceSha256: string;
	readonly provisions: readonly Provision[];
}

export class CorpusInvariantError extends Error {
	public constructor(message: string) {
		super(message);
		this.name = "CorpusInvariantError";
	}
}
