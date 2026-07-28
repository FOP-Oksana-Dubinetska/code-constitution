import { describe, expect, it } from "vitest";
import { CorpusValidator } from "../../src/constitution-corpus/application/corpus-validator.js";

describe("CorpusValidator", () => {
	it("rejects a changed corpus with otherwise plausible provision metadata", () => {
		const index = {
			sourceSha256: "b".repeat(64),
			provisions: [
				{
					id: "kc-9999",
					range: { startByte: 0, endByte: 1 },
					sourceBytes: new Uint8Array(1),
				},
			],
		};
		const declaration = {
			source: "canonical.md",
			sourceSha256: "a".repeat(64),
			provisionNamespace: "kc",
			provisionCount: 1,
		};

		expect(() => {
			new CorpusValidator().validate(index, declaration);
		}).toThrow("SHA-256");
	});
});
