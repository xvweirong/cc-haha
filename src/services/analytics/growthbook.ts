// MODIFIED: Telemetry cleanup - stubbed

export type GrowthBookUserAttributes = Record<string, unknown>

export function onGrowthBookRefresh(_cb: () => void): void {
  // no-op
}
export function hasGrowthBookEnvOverride(_feature: string): boolean {
  return false
}
export function getAllGrowthBookFeatures(): Record<string, unknown> {
  return {}
}
export function getGrowthBookConfigOverrides(): Record<string, unknown> {
  return {}
}
export function setGrowthBookConfigOverride(
  _feature: string,
  _value: unknown,
): void {
  // no-op
}
export function clearGrowthBookConfigOverrides(): void {
  // no-op
}
export function getApiBaseUrlHost(): string | undefined {
  return undefined
}
export const initializeGrowthBook = async (): Promise<void> => {
  // no-op
}
export async function getFeatureValue_DEPRECATED<T>(
  _feature: string,
  defaultValue: T,
): Promise<T> {
  return defaultValue
}
export function getFeatureValue_CACHED_MAY_BE_STALE<T>(
  _feature: string,
  defaultValue: T,
): T {
  return defaultValue
}
export function getFeatureValue_CACHED_WITH_REFRESH<T>(
  _feature: string,
  defaultValue: T,
): T {
  return defaultValue
}
export function checkStatsigFeatureGate_CACHED_MAY_BE_STALE(
  _gate: string,
): boolean {
  return false
}
export async function checkSecurityRestrictionGate(
  _gate: string,
): Promise<boolean> {
  return false
}
export async function checkGate_CACHED_OR_BLOCKING(
  _gate: string,
): Promise<boolean> {
  return false
}
export function refreshGrowthBookAfterAuthChange(): void {
  // no-op
}
export function resetGrowthBook(): void {
  // no-op
}
export async function refreshGrowthBookFeatures(): Promise<void> {
  // no-op
}
export function setupPeriodicGrowthBookRefresh(): void {
  // no-op
}
export function stopPeriodicGrowthBookRefresh(): void {
  // no-op
}
export async function getDynamicConfig_BLOCKS_ON_INIT<T>(
  _feature: string,
  defaultValue: T,
): Promise<T> {
  return defaultValue
}
export function getDynamicConfig_CACHED_MAY_BE_STALE<T>(
  _feature: string,
  defaultValue: T,
): T {
  return defaultValue
}
