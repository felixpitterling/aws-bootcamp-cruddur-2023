// tracing.js
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { WebTracerProvider, BatchSpanProcessor } from '@opentelemetry/sdk-trace-web';
import { ZoneContextManager } from '@opentelemetry/context-zone';
import { Resource }  from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { getWebAutoInstrumentations } from '@opentelemetry/auto-instrumentations-web'
import { registerInstrumentations } from "@opentelemetry/instrumentation";
// import { XMLHttpRequestInstrumentation } from '@opentelemetry/instrumentation-xml-http-request';
// import { FetchInstrumentation } from '@opentelemetry/instrumentation-fetch';


const exporter = new OTLPTraceExporter({
  url: 'https://api.honeycomb.io:443/v1/traces',
  headers: {
    "x-honeycomb-team": "AfRHY2h56r4TdFP4H9r7LF",
  },
  // hostname: "frontend-react-js"
});
const provider = new WebTracerProvider({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'browser',
  }),
});
provider.addSpanProcessor(new BatchSpanProcessor(exporter));
provider.register({
  contextManager: new ZoneContextManager()
});

registerInstrumentations({
  instrumentations: [
    getWebAutoInstrumentations({
      // load custom configuration for xml-http-request instrumentation
      '@opentelemetry/instrumentation-xml-http-request': {
        propagateTraceHeaderCorsUrls: [
          `(https://4567-felixpitter-awsbootcamp-b81x2zyp4wg.ws-eu88.gitpod.io)?[^/\?]*$`
            // /.+/g, //Regex to match your backend urls. This should be updated.
            // 'https://4567-felixpitter-awsbootcamp-b81x2zyp4wg.ws-eu88.gitpod.io/api/activities/home'
          ],
      },
      '@opentelemetry/instrumentation-fetch': {
        propagateTraceHeaderCorsUrls: [
          `(https://4567-felixpitter-awsbootcamp-b81x2zyp4wg.ws-eu88.gitpod.io)?[^/\?]*$`
          ],
      },
    }),
  ],
 });