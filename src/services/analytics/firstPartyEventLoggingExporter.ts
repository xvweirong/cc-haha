// MODIFIED: Telemetry cleanup - stubbed

import { ExportResultCode } from '@opentelemetry/core'

import type { LogRecordExporter } from '@opentelemetry/sdk-logs'
import type { LogRecord } from '@opentelemetry/api-logs'

export class FirstPartyEventLoggingExporter implements LogRecordExporter {
  export(
    _logs: LogRecord[],
    resultCallback: (result: { code: ExportResultCode }) => void,
  ): void {
    resultCallback({ code: ExportResultCode.SUCCESS })
  }

  shutdown(): Promise<void> {
    return Promise.resolve()
  }

  forceFlush(): Promise<void> {
    return Promise.resolve()
  }
}
