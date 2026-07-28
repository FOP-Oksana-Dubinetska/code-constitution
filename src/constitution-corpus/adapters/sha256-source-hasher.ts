import { createHash } from "node:crypto";
import type { SourceHasher } from "../application/ports.js";

export class Sha256SourceHasher implements SourceHasher {
	public hash(source: Uint8Array): string {
		return createHash("sha256").update(source).digest("hex");
	}
}
