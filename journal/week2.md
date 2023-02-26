# Week 2 — Distributed Tracing

## Class Notes

### _1. [LIVE] Distributed Tracing Overview_

- Jessica's Introduction

  - Software (Programming) vs **Systems**
  - Software has the Debugger
  - Everything else uses **Observability**
    - Done by giving programms instructions to tell us what is going on
  - Traditional Logs vs Modern Observability
  - Observability uses **distributed tracing** to tell use a story
    - distributed tracing is used mostly in the backend

- Structure
  - Trace: collections of spans (single unit of time)
    - Tell use when things start and end
  - Spans can form trees to give us more details
- Service Map

  - Looks at all of your traces and shows relations (not needed)

- Instrumentation is the code that send the traces
- Observability tools: Tracing, Logging, Metrcis
- OTEL Standard & Cloud Native Foundation
- Heat map for latecny is the preffered tool
- Root spans contain only single calls

### _2. [NOT LIVE] Instrument XRay_

- AWS Observability Tool
  - Works best with lamda and serverless services
- Requires a daemon (not required in Honeycomb)
- Middleware is software for web applications that sits in between the client and your application (server)
  - Can handle authentication (white/black lists)
  - Make sure files are in the correct format and do not exceed a size limit
