import { CorpusPipeline } from "../constitution-corpus/application/corpus-pipeline.js";
import { RemarkCorpusIndexer } from "../constitution-corpus/adapters/remark-corpus-indexer.js";
import { Sha256SourceHasher } from "../constitution-corpus/adapters/sha256-source-hasher.js";

export function createCorpusPipeline(): CorpusPipeline {
	const hasher = new Sha256SourceHasher();

	return new CorpusPipeline(new RemarkCorpusIndexer(hasher), hasher);
}
