import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";

describe("rule coverage registry", () => {
	it("contains the exact unique set of all 38 development rule IDs", async () => {
		const development = await readFile(
			"locales/ru/governance/legislation/DEVELOPMENT.md",
			"utf8",
		);
		const expected = [
			...development.matchAll(/^### ((?:BASE|KCR)-[A-Z0-9]+)\./gm),
		].map((match) => match[1]);
		const registry = JSON.parse(
			await readFile("manifest/rule-checks.json", "utf8"),
		) as {
			rules: { ruleId: string }[];
		};
		const actual = registry.rules.map(({ ruleId }) => ruleId);

		expect(expected).toHaveLength(38);
		expect(new Set(expected).size).toBe(38);
		expect(actual).toHaveLength(38);
		expect(new Set(actual).size).toBe(38);
		expect([...actual].sort()).toEqual([...expected].sort());
	});
});
