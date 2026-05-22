// MODIFIED: Telemetry cleanup - stubbed

export type TraceEventPhase = string
export type TraceEvent = { ph: string; name: string; ts: number }

export function initializePerfettoTracing(): void {}
export function isPerfettoTracingEnabled(): boolean { return false }
export function registerAgent(_agentId: string, _name: string): void {}
export function unregisterAgent(_agentId: string): void {}
export function startLLMRequestPerfettoSpan(_args: unknown): string { return '' }
export function endLLMRequestPerfettoSpan(_spanId: string): void {}
export function startToolPerfettoSpan(_toolName: string): string { return '' }
export function endToolPerfettoSpan(_spanId: string): void {}
export function startUserInputPerfettoSpan(_context?: string): string { return '' }
export function endUserInputPerfettoSpan(_spanId: string): void {}
export function emitPerfettoInstant(_name: string, _args?: unknown): void {}
export function emitPerfettoCounter(_name: string, _value: number): void {}
export function startInteractionPerfettoSpan(_userPrompt?: string): string { return '' }
export function endInteractionPerfettoSpan(_spanId: string): void {}
export function getPerfettoEvents(): TraceEvent[] { return [] }
export function resetPerfettoTracer(): void {}
export async function triggerPeriodicWriteForTesting(): Promise<void> {}
export function evictStaleSpansForTesting(): void {}
export const MAX_EVENTS_FOR_TESTING = 0
export function evictOldestEventsForTesting(): void {}
