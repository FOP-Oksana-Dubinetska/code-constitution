import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";

function uniqueMatches(source: string, pattern: RegExp): string[] {
	return [...source.matchAll(pattern)].map((match) => {
		const identifier = match[1];
		if (identifier === undefined) {
			throw new Error("An identifier capture is required.");
		}

		return identifier;
	});
}

describe("localized Question Maps", () => {
	it.each(["ru", "en", "uk"] as const)(
		"maintains exact 334/334 parity in the %s locale",
		async (locale) => {
			const constitution = await readFile(
				`locales/${locale}/CONSTITUTION_CODE.md`,
				"utf8",
			);
			const questionMap = await readFile(
				`locales/${locale}/QUESTION_MAP.md`,
				"utf8",
			);
			const provenance = JSON.parse(
				await readFile("manifest/provenance.json", "utf8"),
			) as { sourceSha256: string };
			const provisionIds = uniqueMatches(
				constitution,
				/<a id="(kc-\d{4})"><\/a>/g,
			);
			const questionIds = uniqueMatches(
				questionMap,
				/<a id="q-(kc-\d{4})"><\/a>/g,
			);
			const linkedProvisionIds = uniqueMatches(
				questionMap,
				/\[kc-\d{4}\]\(CONSTITUTION_CODE\.md#(kc-\d{4})\)/g,
			);

			expect(provisionIds).toHaveLength(334);
			expect(new Set(provisionIds).size).toBe(334);
			expect(questionIds).toHaveLength(334);
			expect(new Set(questionIds).size).toBe(334);
			expect(linkedProvisionIds).toHaveLength(334);
			expect(new Set(linkedProvisionIds).size).toBe(334);
			expect([...questionIds].sort()).toEqual([...provisionIds].sort());
			expect([...linkedProvisionIds].sort()).toEqual([...provisionIds].sort());
			expect(questionMap).toContain(provenance.sourceSha256);
		},
	);
});
