// MODIFIED: Telemetry cleanup - stubbed

export function clearBetaTracingState(): void {}
export function isBetaTracingEnabled(): boolean { return false }
export function truncateContent(_content: string, _maxLen?: number): string { return '' }

export interface LLMRequestNewContext {
  agentId?: string
  agentName?: string
  parentAgentId?: string
}

export function addBetaInteractionAttributes(_attrs: Record<string, unknown>): void {}
export function addBetaLLMRequestAttributes(_attrs: Record<string, unknown>): void {}
export function addBetaLLMResponseAttributes(_attrs: Record<string, unknown>): void {}
export function addBetaToolInputAttributes(_attrs: Record<string, unknown>): void {}
export function addBetaToolResultAttributes(_attrs: Record<string, unknown>): void {}
