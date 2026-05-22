// MODIFIED: Telemetry cleanup - stubbed

export function bootstrapTelemetry(): void {
  // no-op
}
export function parseExporterTypes(_value: string | undefined): string[] {
  return []
}
export function isTelemetryEnabled(): boolean {
  return false
}
export async function initializeTelemetry(): Promise<void> {
  // no-op
}
export async function flushTelemetry(): Promise<void> {
  // no-op
}
