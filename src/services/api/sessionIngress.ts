// MODIFIED: Telemetry cleanup - stubbed

export async function appendSessionLog(_sessionId: string, _entry: unknown): Promise<void> {}
export async function getSessionLogs(_sessionId: string): Promise<unknown[]> { return [] }
export async function getSessionLogsViaOAuth(_sessionId: string): Promise<unknown[]> { return [] }
export async function getTeleportEvents(_sessionId: string): Promise<unknown[]> { return [] }
export function clearSession(_sessionId: string): void {}
export function clearAllSessions(): void {}
