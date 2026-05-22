// MODIFIED: Telemetry cleanup - stubbed

export type { Span }
export { isBetaTracingEnabled, type LLMRequestNewContext }

import { isBetaTracingEnabled, type LLMRequestNewContext } from './betaSessionTracing.js'

export type Span = { end: () => void; recordException?: (e: Error) => void }

export function isEnhancedTelemetryEnabled(): boolean {
  return false
}
export function startInteractionSpan(_userPrompt: string): Span {
  return { end() {} }
}
export function endInteractionSpan(): void {}
export function startLLMRequestSpan(_opts: unknown): Span {
  return { end() {} }
}
export function endLLMRequestSpan(_result?: unknown): void {}
export function startToolSpan(_toolName: string): Span {
  return { end() {} }
}
export function startToolBlockedOnUserSpan(): Span {
  return { end() {} }
}
export function endToolBlockedOnUserSpan(): void {}
export function startToolExecutionSpan(): Span {
  return { end() {} }
}
export function endToolExecutionSpan(_metadata?: { toolName?: string }): void {}
export function endToolSpan(_toolResult?: string, _resultTokens?: number): void {}
export function addToolContentEvent(_toolName: string, _event: string): void {}
export function getCurrentSpan(): Span | null {
  return null
}
export async function executeInSpan<T>(_name: string, fn: () => Promise<T>): Promise<T> {
  return fn()
}
export function startHookSpan(_hookName: string): Span {
  return { end() {} }
}
export function endHookSpan(_error?: Error): void {}
