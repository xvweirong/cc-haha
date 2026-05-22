// MODIFIED: Telemetry cleanup - stubbed

export type EventSamplingConfig = Record<string, { sampleRate: number }>

export function getEventSamplingConfig(): EventSamplingConfig {
  return {}
}

export function shouldSampleEvent(_eventName: string): number | null {
  return null
}

export async function shutdown1PEventLogging(): Promise<void> {
  // no-op
}

export function is1PEventLoggingEnabled(): boolean {
  return false
}

export function logEventTo1P(
  _eventName: string,
  _metadata?: Record<string, unknown>,
): void {
  // no-op
}

export type GrowthBookExperimentData = {
  experimentId?: string
  variationId?: string
}

export function logGrowthBookExperimentTo1P(
  _eventName: string,
  _metadata?: Record<string, unknown>,
): void {
  // no-op
}

export function initialize1PEventLogging(): void {
  // no-op
}

export async function reinitialize1PEventLoggingIfConfigChanged(): Promise<void> {
  // no-op
}
