// MODIFIED: Telemetry cleanup - stubbed

export function redactIfDisabled(content: string): string {
  return content
}

export async function logOTelEvent(
  _name: string,
  _attributes?: Record<string, unknown>,
): Promise<void> {
  // no-op
}
