// MODIFIED: Telemetry cleanup - stubbed

export type AccountSettings = Record<string, unknown>
export type GroveConfig = Record<string, unknown>
export type ApiResult<T> = { success: true; data: T } | { success: false; error?: string }

export const getGroveSettings = async (): Promise<GroveConfig> => {
  return {}
}
export async function markGroveNoticeViewed(): Promise<void> {}
export async function updateGroveSettings(_settings: AccountSettings): Promise<void> {}
export async function isQualifiedForGrove(): Promise<boolean> {
  return false
}
export const getGroveNoticeConfig = async (): Promise<GroveConfig> => {
  return {}
}
export function calculateShouldShowGrove(_config: GroveConfig): boolean {
  return false
}
export async function checkGroveForNonInteractive(): Promise<void> {}
