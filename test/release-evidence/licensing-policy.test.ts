import { readFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { describe, expect, it } from "vitest";

describe("licensing policy", () => {
	it("uses the policy revision required by P02", async () => {
		const revision = execFileSync(
			"git",
			["-C", ".licensing-policy", "rev-parse", "HEAD"],
			{ encoding: "utf8" },
		).trim();
		const licenseMap = await readFile("LICENSE.md", "utf8");

		expect(revision).toBe("6e4c2627717c079827ed4aa9044a5346b3ea3ddb");
		expect(licenseMap).toContain(revision);
		expect(licenseMap).toContain("CC-BY-SA-4.0");
		expect(licenseMap).toContain("MIT");
	});
});
