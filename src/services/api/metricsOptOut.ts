// MODIFIED: Telemetry cleanup - stubbed

export type MetricsStatus = 'opted_in' | 'opted_out' | 'unknown'

export async function checkMetricsEnabled(): Promise<MetricsStatus> {
  return 'opted_out'
}
export const _clearMetricsEnabledCacheForTesting = (): void => {}
