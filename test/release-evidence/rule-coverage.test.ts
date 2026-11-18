import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";

describe("rule coverage registry", () => {
	it("contains the exact unique set of all 48 development and interface rule IDs", async () => {
		const development = (
			await Promise.all(
				["DEVELOPMENT", "INTERFACE"].map((act) =>
					readFile(`governance/legislation/${act}.md`, "utf8"),
				),
			)
		).join("\n");
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

		expect(expected).toHaveLength(48);
		expect(new Set(expected).size).toBe(48);
		expect(actual).toHaveLength(48);
		expect(new Set(actual).size).toBe(48);
		expect([...actual].sort()).toEqual([...expected].sort());
	});
});
