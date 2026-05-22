// MODIFIED: Telemetry cleanup - stubbed

export type AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS = never
export type AnalyticsMetadata_I_VERIFIED_THIS_IS_PII_TAGGED = never

export function stripProtoFields<V>(value: V): V {
  return value
}

export type AnalyticsSink = {
  logEvent: (eventName: string, metadata?: Record<string, unknown>) => void
}

export function attachAnalyticsSink(_newSink: AnalyticsSink): void {
  // no-op
}

export function logEvent(
  _eventName: string,
  _metadata?: Record<string, unknown>,
): void {
  // no-op
}

export async function logEventAsync(
  _eventName: string,
  _metadata?: Record<string, unknown>,
): Promise<void> {
  // no-op
}

export function _resetForTesting(): void {
  // no-op
}
