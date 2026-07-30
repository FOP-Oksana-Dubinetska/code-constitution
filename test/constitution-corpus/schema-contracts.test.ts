import { readFile } from "node:fs/promises";
import Ajv2020Module from "ajv/dist/2020.js";
import addFormatsModule from "ajv-formats";
import { describe, expect, it } from "vitest";

const contracts = [
	["schema/locales.schema.json", "locales/locales.json"],
	["schema/locale.schema.json", "locales/ru/LOCALE.json"],
	["schema/locale.schema.json", "locales/uk/LOCALE.json"],
	["schema/locale.schema.json", "locales/en/LOCALE.json"],
	["schema/acts.schema.json", "governance/acts.json"],
	["schema/provenance.schema.json", "manifest/provenance.json"],
	["schema/distribution.schema.json", "manifest/distribution.json"],
	["schema/rule-checks.schema.json", "manifest/rule-checks.json"],
	[
		"schema/technical-regulators.schema.json",
		"manifest/technical-regulators.json",
	],
	["schema/tools.schema.json", "tools.json"],
	["schema/fixture.schema.json", "test/fixtures/fixture-manifest.json"],
] as const;
const Ajv2020 = Ajv2020Module.default;
const addFormats = addFormatsModule.default;

describe("JSON data contracts", () => {
	it("compiles every repository schema in strict mode", async () => {
		const schemaPaths = [
			"schema/acts.schema.json",
			"schema/distribution.schema.json",
			"schema/exceptions.schema.json",
			"schema/fixture.schema.json",
			"schema/locale.schema.json",
			"schema/locales.schema.json",
			"schema/profile.schema.json",
			"schema/provenance.schema.json",
			"schema/release.schema.json",
			"schema/rule-checks.schema.json",
			"schema/technical-regulators.schema.json",
			"schema/tools.schema.json",
		];
		for (const schemaPath of schemaPaths) {
			const ajv = new Ajv2020({ strict: true });
			addFormats(ajv);
			const schema = JSON.parse(await readFile(schemaPath, "utf8")) as object;

			expect(() => ajv.compile(schema), schemaPath).not.toThrow();
		}
	});

	it.each(contracts)(
		"validates %s against %s",
		async (schemaPath, documentPath) => {
			const ajv = new Ajv2020({ strict: true });
			addFormats(ajv);
			const schema = JSON.parse(await readFile(schemaPath, "utf8")) as object;
			const document: unknown = JSON.parse(
				await readFile(documentPath, "utf8"),
			);

			expect(ajv.validate(schema, document), JSON.stringify(ajv.errors)).toBe(
				true,
			);
		},
	);
});
