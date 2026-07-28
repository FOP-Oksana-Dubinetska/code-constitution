import { Buffer } from "node:buffer";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { unified } from "unified";
import {
	CorpusInvariantError,
	type CorpusIndex,
	type Provision,
} from "../domain/corpus.js";
import type {
	MarkdownCorpusIndexer,
	SourceHasher,
} from "../application/ports.js";

const provisionAnchor = /^<a id="(kc-\d{4})">$/;

interface PositionedNode {
	readonly type: string;
	readonly value?: string;
	readonly children?: readonly PositionedNode[];
	readonly position?: {
		readonly start: { readonly offset?: number };
		readonly end: { readonly offset?: number };
	};
}

function findProvisionIdentifiers(node: PositionedNode): string[] {
	if (node.type === "code" || node.type === "inlineCode") return [];

	const identifiers: string[] = [];
	for (const [index, child] of (node.children ?? []).entries()) {
		if (child.type === "html" && child.value !== undefined) {
			const match = provisionAnchor.exec(child.value);
			if (
				match?.[1] !== undefined &&
				node.children?.[index + 1]?.value === "</a>"
			) {
				identifiers.push(match[1]);
			}
		}
		identifiers.push(...findProvisionIdentifiers(child));
	}

	return identifiers;
}

export class RemarkCorpusIndexer implements MarkdownCorpusIndexer {
	public constructor(private readonly hasher: SourceHasher) {}

	public index(source: Uint8Array): CorpusIndex {
		const text = new TextDecoder("utf-8", { fatal: true }).decode(source);
		const tree = unified()
			.use(remarkParse)
			.use(remarkGfm)
			.parse(text) as PositionedNode;
		const provisionNodes: { identifier: string; node: PositionedNode }[] = [];
		const visit = (node: PositionedNode): void => {
			if (node.type === "code" || node.type === "inlineCode") return;

			if (node.type === "paragraph" || node.type === "tableRow") {
				const identifiers = findProvisionIdentifiers(node);
				if (identifiers.length > 0) {
					provisionNodes.push(
						...identifiers.map((identifier) => ({ identifier, node })),
					);

					return;
				}
			}
			for (const child of node.children ?? []) visit(child);
		};
		visit(tree);
		const identifiers = provisionNodes.map(({ identifier }) => identifier);
		if (new Set(identifiers).size !== identifiers.length) {
			throw new CorpusInvariantError(
				"Provision identifiers must be present and unique.",
			);
		}

		const provisions = provisionNodes.map(({ identifier, node }): Provision => {
			const startCharacter = node.position?.start.offset;
			const endCharacter = node.position?.end.offset;
			if (startCharacter === undefined || endCharacter === undefined) {
				throw new CorpusInvariantError(
					`The AST has no source range for ${identifier}.`,
				);
			}
			const startByte = Buffer.byteLength(text.slice(0, startCharacter));
			const endByte = Buffer.byteLength(text.slice(0, endCharacter));

			return {
				id: identifier,
				range: { startByte, endByte },
				sourceBytes: source.slice(startByte, endByte),
			};
		});

		return { sourceSha256: this.hasher.hash(source), provisions };
	}
}
