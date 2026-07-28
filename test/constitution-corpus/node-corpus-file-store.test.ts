import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { NodeCorpusFileStore } from "../../src/constitution-corpus/adapters/node-corpus-file-store.js";

describe("NodeCorpusFileStore", () => {
	it("isolates temporary files during concurrent atomic writes", async () => {
		const directory = await mkdtemp(join(tmpdir(), "constitution-store-"));
		const destination = join(directory, "candidate.md");
		const store = new NodeCorpusFileStore();

		try {
			await Promise.all([
				store.writeAtomically(destination, new TextEncoder().encode("first")),
				store.writeAtomically(destination, new TextEncoder().encode("second")),
			]);
			expect(["first", "second"]).toContain(
				await readFile(destination, "utf8"),
			);
		} finally {
			await rm(directory, { recursive: true, force: true });
		}
	});
});
