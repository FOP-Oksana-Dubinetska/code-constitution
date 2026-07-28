export interface ReleaseObservation {
	readonly gitCommit: string;
	readonly nodeVersion: string;
	readonly npmVersion: string;
	readonly observedAt: string;
}

export interface ReleaseReport {
	readonly schemaVersion: "1.0.0";
	readonly observation: ReleaseObservation;
	readonly status: "candidate";
}

export class ReleaseReportBuilder {
	public build(observation: ReleaseObservation): ReleaseReport {
		return { schemaVersion: "1.0.0", observation, status: "candidate" };
	}
}
