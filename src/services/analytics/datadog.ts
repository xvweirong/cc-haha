// MODIFIED: Telemetry cleanup - stubbed

export const initializeDatadog = async (): Promise<boolean> => {
  return false
}

export async function shutdownDatadog(): Promise<void> {
  // no-op
}

export async function trackDatadogEvent(
  _eventName: string,
  _metadata?: Record<string, unknown>,
): Promise<void> {
  // no-op
}
