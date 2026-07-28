import {
	CorpusInvariantError,
	type CorpusIndex,
	type Provision,
} from "../domain/corpus.js";
import type { MarkdownCorpusIndexer, SourceHasher } from "./ports.js";

export interface SplitCorpus {
	readonly index: CorpusIndex;
	readonly sourceSegments: readonly Uint8Array[];
	readonly provisions: readonly Provision[];
}

export class CorpusPipeline {
	public constructor(
		private readonly indexer: MarkdownCorpusIndexer,
		private readonly hasher: SourceHasher,
	) {}

	public split(source: Uint8Array): SplitCorpus {
		const index = this.indexer.index(source);
		if (index.provisions.length === 0) {
			throw new CorpusInvariantError("The corpus must contain provisions.");
		}

		const boundaries = new Set([0, source.length]);
		for (const provision of index.provisions) {
			boundaries.add(provision.range.startByte);
			boundaries.add(provision.range.endByte);
		}
		const offsets = [...boundaries].sort((left, right) => left - right);
		const sourceSegments = offsets.slice(0, -1).map((start, index_) => {
			const end = offsets[index_ + 1];
			if (end === undefined) {
				throw new CorpusInvariantError("A source segment has no end boundary.");
			}

			return source.slice(start, end);
		});

		return { index, sourceSegments, provisions: index.provisions };
	}

	public assemble(splitCorpus: SplitCorpus): Uint8Array {
		const size = splitCorpus.sourceSegments.reduce(
			(total, segment) => total + segment.length,
			0,
		);
		const assembled = new Uint8Array(size);
		let offset = 0;

		for (const segment of splitCorpus.sourceSegments) {
			assembled.set(segment, offset);
			offset += segment.length;
		}

		return assembled;
	}

	public assertRoundTrip(source: Uint8Array): CorpusIndex {
		const splitCorpus = this.split(source);
		const assembled = this.assemble(splitCorpus);
		if (this.hasher.hash(assembled) !== this.hasher.hash(source)) {
			throw new CorpusInvariantError(
				"The unchanged corpus round trip altered source bytes.",
			);
		}

		return splitCorpus.index;
	}
}
