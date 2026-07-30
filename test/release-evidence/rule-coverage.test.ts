import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";

describe("rule coverage registry", () => {
	it("contains the exact unique set of all 41 development rule IDs", async () => {
		const development = await readFile(
			"governance/legislation/DEVELOPMENT.md",
			"utf8",
		);
		const expected = [
			...development.matchAll(
				/^### ((?:BASE|KCR)-[A-Z0-9]+(?:-[A-Z0-9]+)*)\./gm,
			),
		].map((match) => match[1]);
		const registry = JSON.parse(
			await readFile("manifest/rule-checks.json", "utf8"),
		) as {
			rules: { ruleId: string }[];
		};
		const actual = registry.rules.map(({ ruleId }) => ruleId);

		expect(expected).toHaveLength(41);
		expect(new Set(expected).size).toBe(41);
		expect(actual).toHaveLength(41);
		expect(new Set(actual).size).toBe(41);
		expect([...actual].sort()).toEqual([...expected].sort());
	});
});
