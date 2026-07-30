import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import type { RegisteredAct } from "../../src/constitution-corpus/application/act-registry-validator.js";
import type { CanonicalCorpusDeclaration } from "../../src/constitution-corpus/application/corpus-validator.js";
import {
	TechnicalRegulatorValidator,
	type NormativeSourceDeclaration,
	type TechnicalRegulator,
	type TechnicalRegulatorRegistry,
} from "../../src/constitution-corpus/application/technical-regulator-validator.js";
import { NodeCorpusFileStore } from "../../src/constitution-corpus/adapters/node-corpus-file-store.js";

async function loadRegistryAndSources(): Promise<{
	readonly registry: TechnicalRegulatorRegistry;
	readonly sources: readonly NormativeSourceDeclaration[];
}> {
	const registry = JSON.parse(
		await readFile("manifest/technical-regulators.json", "utf8"),
	) as TechnicalRegulatorRegistry;
	const provenance = JSON.parse(
		await readFile("manifest/provenance.json", "utf8"),
	) as CanonicalCorpusDeclaration;
	const acts = JSON.parse(await readFile("governance/acts.json", "utf8")) as {
		acts: RegisteredAct[];
	};

	return {
		registry,
		sources: [
			{ source: provenance.source, revision: provenance.sourceSha256 },
			...acts.acts.map(({ path: source, revision }) => ({ source, revision })),
		],
	};
}

function requireFirstRegulator(
	registry: TechnicalRegulatorRegistry,
): TechnicalRegulator {
	const regulator = registry.regulators[0];
	if (regulator === undefined) {
		throw new Error("The test registry must contain a technical regulator.");
	}

	return regulator;
}

describe("technical regulator registry", () => {
	it("resolves every exact normative basis and local configuration path", async () => {
		const { registry, sources } = await loadRegistryAndSources();

		await expect(
			new TechnicalRegulatorValidator(new NodeCorpusFileStore()).validate(
				registry.regulators,
				sources,
			),
		).resolves.toBeUndefined();
	});

	it("rejects duplicate regulator IDs", async () => {
		const { registry, sources } = await loadRegistryAndSources();
		const regulator = requireFirstRegulator(registry);

		await expect(
			new TechnicalRegulatorValidator(new NodeCorpusFileStore()).validate(
				[...registry.regulators, regulator],
				sources,
			),
		).rejects.toThrow("identifiers must be unique");
	});

	it("rejects a stale normative revision", async () => {
		const { registry, sources } = await loadRegistryAndSources();
		const regulator = requireFirstRegulator(registry);
		const basis = regulator.normativeBasis[0];
		if (basis === undefined) {
			throw new Error("The test regulator must contain a normative basis.");
		}
		const changedRegulator = {
			...regulator,
			id: "kcr-regulator-stale-revision-999",
			normativeBasis: [{ ...basis, revision: "stale-revision" }],
		};

		await expect(
			new TechnicalRegulatorValidator(new NodeCorpusFileStore()).validate(
				[changedRegulator],
				sources,
			),
		).rejects.toThrow("declared revision");
	});

	it("rejects an unresolved configuration path", async () => {
		const { registry, sources } = await loadRegistryAndSources();
		const regulator = requireFirstRegulator(registry);
		const changedRegulator = {
			...regulator,
			id: "kcr-regulator-missing-path-999",
			configurationPaths: ["missing/configuration.json"],
		};

		await expect(
			new TechnicalRegulatorValidator(new NodeCorpusFileStore()).validate(
				[changedRegulator],
				sources,
			),
		).rejects.toThrow("unresolved configuration path");
	});
});
