// MODIFIED: Telemetry cleanup - stubbed

import { ExportResultCode } from '@opentelemetry/core'

export class BigQueryMetricsExporter {
  export(
    _metrics: unknown[],
    resultCallback: (result: { code: ExportResultCode }) => void,
  ): void {
    resultCallback({ code: ExportResultCode.SUCCESS })
  }
  shutdown(): Promise<void> { return Promise.resolve() }
  forceFlush(): Promise<void> { return Promise.resolve() }
}
