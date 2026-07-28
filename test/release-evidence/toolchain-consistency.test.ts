import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";

interface ToolManifest {
	readonly node: string;
	readonly npm: string;
}

describe("toolchain declarations", () => {
	it("pins the workflow to the Node.js and npm versions in tools.json", async () => {
		const tools = JSON.parse(
			await readFile("tools.json", "utf8"),
		) as ToolManifest;
		const workflow = await readFile(".github/workflows/check.yml", "utf8");

		expect(workflow).toContain(`node-version: ${tools.node}`);
		expect(workflow).toContain(`npm install --global npm@${tools.npm}`);
	});
});
