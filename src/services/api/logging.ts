// MODIFIED: Telemetry cleanup - stubbed

export type GlobalCacheStrategy = 'tool_based' | 'system_prompt' | 'none'

export const EMPTY_USAGE = {}
export function normalizeUsage(u: unknown) { return u }

export function logAPIQuery(_query: unknown): void {}
export function logAPIError(_params: unknown): void {}
export function logAPISuccessAndDuration(_params: unknown): void {}
