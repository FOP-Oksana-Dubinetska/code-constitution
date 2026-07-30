import { randomUUID } from "node:crypto";
import {
	access,
	mkdir,
	readFile,
	rename,
	rm,
	writeFile,
} from "node:fs/promises";
import { dirname, resolve } from "node:path";
import type { CorpusFileStore } from "../application/ports.js";

const writeQueues = new Map<string, Promise<void>>();

export class NodeCorpusFileStore implements CorpusFileStore {
	public async read(path: string): Promise<Uint8Array> {
		return readFile(path);
	}

	public async readText(path: string): Promise<string> {
		return readFile(path, "utf8");
	}

	public async exists(path: string): Promise<boolean> {
		try {
			await access(path);

			return true;
		} catch {
			return false;
		}
	}

	public async writeAtomically(
		path: string,
		content: Uint8Array,
	): Promise<void> {
		const queueKey = resolve(path);
		const contentSnapshot = Uint8Array.from(content);
		const previousWrite = writeQueues.get(queueKey) ?? Promise.resolve();

		const currentWrite = previousWrite
			.catch(() => undefined)
			.then(() => this.performAtomicWrite(path, contentSnapshot));

		writeQueues.set(queueKey, currentWrite);

		try {
			await currentWrite;
		} finally {
			if (writeQueues.get(queueKey) === currentWrite) {
				writeQueues.delete(queueKey);
			}
		}
	}

	private async performAtomicWrite(
		path: string,
		content: Uint8Array,
	): Promise<void> {
		const temporaryPath = `${path}.${randomUUID()}.temporary`;

		await mkdir(dirname(path), { recursive: true });

		try {
			await writeFile(temporaryPath, content, { flag: "wx" });
			await rename(temporaryPath, path);
		} catch (error) {
			await rm(temporaryPath, { force: true });
			throw error;
		}
	}
}
