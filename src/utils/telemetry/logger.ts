// MODIFIED: Telemetry cleanup - stubbed

import type { DiagLogger } from '@opentelemetry/api'

export class ClaudeCodeDiagLogger implements DiagLogger {
  debug(_msg: string, ..._args: unknown[]): void {}
  error(_msg: string, ..._args: unknown[]): void {}
  warn(_msg: string, ..._args: unknown[]): void {}
  info(_msg: string, ..._args: unknown[]): void {}
  verbose(_msg: string, ..._args: unknown[]): void {}
}
