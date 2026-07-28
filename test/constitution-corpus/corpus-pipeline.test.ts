import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { CorpusPipeline } from "../../src/constitution-corpus/application/corpus-pipeline.js";
import { RemarkCorpusIndexer } from "../../src/constitution-corpus/adapters/remark-corpus-indexer.js";
import { Sha256SourceHasher } from "../../src/constitution-corpus/adapters/sha256-source-hasher.js";

function createPipeline(): CorpusPipeline {
	const hasher = new Sha256SourceHasher();

	return new CorpusPipeline(new RemarkCorpusIndexer(hasher), hasher);
}

describe("CorpusPipeline", () => {
	it("preserves every byte during an unchanged split and assembly", async () => {
		const source = await readFile("locales/ru/CONSTITUTION_CODE.md");
		const pipeline = createPipeline();

		expect(Buffer.from(pipeline.assemble(pipeline.split(source)))).toEqual(
			source,
		);
		expect(pipeline.assertRoundTrip(source).provisions).toHaveLength(334);
	});

	it("rejects duplicate provision identifiers", () => {
		const source = new TextEncoder().encode(
			'<a id="kc-0001"></a> One\n<a id="kc-0001"></a> Two\n',
		);

		expect(() => createPipeline().split(source)).toThrow("unique");
	});

	it("rejects a document without provisions", () => {
		expect(() =>
			createPipeline().split(new TextEncoder().encode("# Empty\n")),
		).toThrow("must contain");
	});

	it("ignores provision-like anchors inside fenced code blocks", () => {
		const source = new TextEncoder().encode(
			'```html\n<a id="kc-9999"></a>\n```\n',
		);

		expect(() => createPipeline().split(source)).toThrow("must contain");
	});

	it("ends a provision before the next section heading", () => {
		const source = new TextEncoder().encode(
			'<a id="kc-0001"></a> Provision.\n\n## Next section\n',
		);
		const provision = createPipeline().split(source).provisions[0];

		expect(new TextDecoder().decode(provision?.sourceBytes)).toBe(
			'<a id="kc-0001"></a> Provision.',
		);
	});
});
