import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";

const locales = ["ru", "en", "uk"] as const;

function captures(source: string, pattern: RegExp): string[] {
	return [...source.matchAll(pattern)].map((match) => {
		const capture = match[1];
		if (capture === undefined) {
			throw new Error("A structural identifier capture is required.");
		}

		return capture;
	});
}

describe("localization parity", () => {
	it("preserves Constitution provision order in every locale", async () => {
		const identifiers = await Promise.all(
			locales.map(async (locale) =>
				captures(
					await readFile(`locales/${locale}/CONSTITUTION_CODE.md`, "utf8"),
					/<a id="(kc-\d{4})"><\/a>/g,
				),
			),
		);

		expect(identifiers[0]).toHaveLength(334);
		expect(identifiers[1]).toEqual(identifiers[0]);
		expect(identifiers[2]).toEqual(identifiers[0]);
	});

	it("preserves all 18 Founding Profile fields in every locale", async () => {
		const identifiers = await Promise.all(
			locales.map(async (locale) =>
				captures(
					await readFile(`locales/${locale}/governance/PROFILE.md`, "utf8"),
					/^## (P\d{2})\./gm,
				),
			),
		);

		expect(identifiers[0]).toHaveLength(18);
		expect(identifiers[1]).toEqual(identifiers[0]);
		expect(identifiers[2]).toEqual(identifiers[0]);
	});

	it("preserves all 47 Glossary terms in every locale", async () => {
		const identifiers = await Promise.all(
			locales.map(async (locale) =>
				captures(
					await readFile(`locales/${locale}/governance/GLOSSARY.md`, "utf8"),
					/^### ([GK]\d{3})\./gm,
				),
			),
		);

		expect(identifiers[0]).toHaveLength(47);
		expect(identifiers[1]).toEqual(identifiers[0]);
		expect(identifiers[2]).toEqual(identifiers[0]);
	});
});
