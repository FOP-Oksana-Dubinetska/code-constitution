import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import {
	ActRegistryValidator,
	type RegisteredAct,
} from "../../src/constitution-corpus/application/act-registry-validator.js";
import { NodeCorpusFileStore } from "../../src/constitution-corpus/adapters/node-corpus-file-store.js";

describe("act registry", () => {
	it("resolves every ID, revision, status, and path against the act source", async () => {
		const registry = JSON.parse(
			await readFile("governance/acts.json", "utf8"),
		) as {
			acts: RegisteredAct[];
		};

		await expect(
			new ActRegistryValidator(new NodeCorpusFileStore()).validate(
				registry.acts,
			),
		).resolves.toBeUndefined();
	});

	it.each(["effective", "retired"])(
		"rejects the unavailable %s status during bootstrap",
		async (status) => {
			const act = {
				id: "kcr-profile-001",
				path: "locales/ru/governance/PROFILE.md",
				revision: "0.3.0-draft",
				status,
			} as unknown as RegisteredAct;

			await expect(
				new ActRegistryValidator(new NodeCorpusFileStore()).validate([act]),
			).rejects.toThrow("unavailable during bootstrap");
		},
	);
});
