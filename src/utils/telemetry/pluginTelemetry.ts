// MODIFIED: Telemetry cleanup - stubbed

export function hashPluginId(name: string, _marketplace?: string): string { return name }
export type TelemetryPluginScope = string
export function getTelemetryPluginScope(_name: string): TelemetryPluginScope { return '' }
export type EnabledVia = string
export type InvocationTrigger = string
export type SkillExecutionContext = 'fork' | 'inline' | 'remote'
export type InstallSource = string
export function getEnabledVia(_via: string): EnabledVia { return _via }
export function buildPluginTelemetryFields(_record: unknown): Record<string, unknown> { return {} }
export function buildPluginCommandTelemetryFields(_record: unknown): Record<string, unknown> { return {} }
export function logPluginsEnabledForSession(_plugins: unknown[]): void {}
export type PluginCommandErrorCategory = string
export function classifyPluginCommandError(_err: Error): PluginCommandErrorCategory { return '' }
export function logPluginLoadErrors(_errors: unknown[]): void {}
