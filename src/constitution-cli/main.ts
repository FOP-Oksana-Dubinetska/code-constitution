import { readFile } from "node:fs/promises";
import {
	ActRegistryValidator,
	type RegisteredAct,
} from "../constitution-corpus/application/act-registry-validator.js";
import {
	CorpusValidator,
	type CanonicalCorpusDeclaration,
} from "../constitution-corpus/application/corpus-validator.js";
import {
	TechnicalRegulatorValidator,
	type TechnicalRegulatorRegistry,
} from "../constitution-corpus/application/technical-regulator-validator.js";
import { NodeCorpusFileStore } from "../constitution-corpus/adapters/node-corpus-file-store.js";
import { createCorpusPipeline } from "./composition-root.js";

const exitCode = {
	success: 0,
	invalidInput: 2,
	invariantViolation: 3,
} as const;

async function run(arguments_: readonly string[]): Promise<number> {
	if (arguments_[0] !== "validate") {
		console.error("Usage: constitution-cli validate [corpus-path]");

		return exitCode.invalidInput;
	}

	const path = arguments_[1] ?? "locales/ru/CONSTITUTION_CODE.md";
	try {
		const index = createCorpusPipeline().assertRoundTrip(await readFile(path));
		const declaration = JSON.parse(
			await readFile("manifest/provenance.json", "utf8"),
		) as CanonicalCorpusDeclaration;
		if (path !== declaration.source) {
			throw new Error(
				`The requested corpus path differs from the canonical declaration: ${declaration.source}.`,
			);
		}
		new CorpusValidator().validate(index, declaration);
		const actRegistry = JSON.parse(
			await readFile("governance/acts.json", "utf8"),
		) as { acts: RegisteredAct[] };
		const technicalRegulatorRegistry = JSON.parse(
			await readFile("manifest/technical-regulators.json", "utf8"),
		) as TechnicalRegulatorRegistry;
		const fileStore = new NodeCorpusFileStore();

		await new ActRegistryValidator(fileStore).validate(actRegistry.acts);
		await new TechnicalRegulatorValidator(fileStore).validate(
			technicalRegulatorRegistry.regulators,
			[
				{ source: declaration.source, revision: declaration.sourceSha256 },
				...actRegistry.acts.map(({ path: source, revision }) => ({
					source,
					revision,
				})),
			],
		);
		console.log(
			`Validated ${String(index.provisions.length)} provisions with source SHA-256 ${index.sourceSha256} and ${String(technicalRegulatorRegistry.regulators.length)} technical regulators.`,
		);

		return exitCode.success;
	} catch (error) {
		console.error(error instanceof Error ? error.message : String(error));

		return exitCode.invariantViolation;
	}
}

process.exitCode = await run(process.argv.slice(2));
