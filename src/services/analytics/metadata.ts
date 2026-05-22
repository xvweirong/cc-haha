// MODIFIED: Telemetry cleanup - stubbed

export type AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS = never
export type AnalyticsMetadata_I_VERIFIED_THIS_IS_PII_TAGGED = never

export function sanitizeToolNameForAnalytics(name: string): string {
  return name
}
export function isToolDetailsLoggingEnabled(): boolean {
  return false
}
export function isAnalyticsToolDetailsLoggingEnabled(): boolean {
  return false
}
export function mcpToolDetailsForAnalytics(_data: unknown): undefined {
  return undefined
}
export function extractMcpToolDetails(_toolName: string): undefined {
  return undefined
}
export function extractSkillName(_name: string): string {
  return ''
}
export function extractToolInputForTelemetry(
  _toolName: string,
  _input: Record<string, unknown>,
): Record<string, unknown> {
  return {}
}
export function getFileExtensionForAnalytics(_path: string): string {
  return ''
}
export function getFileExtensionsFromBashCommand(_cmd: string): string[] {
  return []
}
export type EnvContext = Record<string, string>
export type ProcessMetrics = Record<string, number>
export type EventMetadata = Record<string, unknown>
export type EnrichMetadataOptions = { skipRepoHash?: boolean }

export async function getEventMetadata(
  _opts?: EnrichMetadataOptions,
): Promise<Record<string, unknown>> {
  return {}
}
export type FirstPartyEventLoggingCoreMetadata = Record<string, unknown>
export type FirstPartyEventLoggingMetadata = Record<string, unknown>

export function to1PEventFormat(_event: {
  eventName: string
  metadata?: Record<string, unknown>
}): Record<string, unknown> {
  return {}
}
