// MODIFIED: Telemetry cleanup - stubbed

export type InstallStatus = 'installed' | 'not_installed'
export type AutoUpdaterResult = {
  updateAvailable?: boolean
  latestVersion?: string
  currentVersion?: string
}
export type MaxVersionConfig = {
  maxVersion?: string
  message?: string
}

export async function assertMinVersion(): Promise<void> {}
export async function getMaxVersion(): Promise<string | undefined> { return undefined }
export async function getMaxVersionMessage(): Promise<string | undefined> { return undefined }
export function shouldSkipVersion(_targetVersion: string): boolean { return false }
export function getLockFilePath(): string { return '' }
export async function checkGlobalInstallPermissions(): Promise<{ allowed: boolean; reason?: string }> {
  return { allowed: false, reason: 'Auto-update disabled' }
}
export async function getLatestVersion(): Promise<string | undefined> { return undefined }
export type NpmDistTags = Record<string, string>
export async function getNpmDistTags(): Promise<NpmDistTags> { return {} }
export async function getLatestVersionFromGcs(): Promise<string | undefined> { return undefined }
export async function getGcsDistTags(): Promise<NpmDistTags> { return {} }
export async function getVersionHistory(_limit: number): Promise<string[]> { return [] }
export async function installGlobalPackage(_pkg: string): Promise<void> {}
