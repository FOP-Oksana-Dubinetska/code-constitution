import { readFile, readdir } from "node:fs/promises";
import { isBuiltin } from "node:module";
import { join } from "node:path";
import ts from "typescript";
import { describe, expect, it } from "vitest";

function collectModuleSpecifiers(source: string): string[] {
	const sourceFile = ts.createSourceFile(
		"architecture-subject.ts",
		source,
		ts.ScriptTarget.Latest,
		true,
		ts.ScriptKind.TS,
	);
	const specifiers: string[] = [];
	const visit = (node: ts.Node): void => {
		if (
			ts.isImportDeclaration(node) &&
			ts.isStringLiteralLike(node.moduleSpecifier)
		) {
			specifiers.push(node.moduleSpecifier.text);
		}
		if (
			ts.isExportDeclaration(node) &&
			node.moduleSpecifier !== undefined &&
			ts.isStringLiteralLike(node.moduleSpecifier)
		) {
			specifiers.push(node.moduleSpecifier.text);
		}
		if (
			ts.isCallExpression(node) &&
			node.expression.kind === ts.SyntaxKind.ImportKeyword
		) {
			const argument = node.arguments[0];
			if (argument !== undefined && ts.isStringLiteralLike(argument)) {
				specifiers.push(argument.text);
			}
		}
		ts.forEachChild(node, visit);
	};
	visit(sourceFile);

	return specifiers;
}

describe("module boundaries", () => {
	it("keeps domain modules independent from application and technical adapters", async () => {
		const domainRoot = "src/constitution-corpus/domain";
		const paths = (await readdir(domainRoot, { recursive: true }))
			.filter((path) => path.endsWith(".ts"))
			.map((path) => join(domainRoot, path));
		expect(paths.length).toBeGreaterThan(0);
		for (const path of paths) {
			const source = await readFile(path, "utf8");
			const imports = collectModuleSpecifiers(source);

			expect(imports).not.toEqual(
				expect.arrayContaining([
					expect.stringMatching(/(?:application|adapters|constitution-cli)/),
				]),
			);
			expect(imports.some((specifier) => isBuiltin(specifier))).toBe(false);
		}
	});

	it("recognizes imports, re-exports, built-in aliases, and dynamic imports", () => {
		const imports = collectModuleSpecifiers(
			'import value from "node:path";\nimport "fs";\nexport type * from "../application/ports.js";\nawait import("node:crypto");\n',
		);

		expect(imports).toEqual([
			"node:path",
			"fs",
			"../application/ports.js",
			"node:crypto",
		]);
		expect(isBuiltin("fs")).toBe(true);
		expect(isBuiltin("node:fs")).toBe(true);
	});
});
