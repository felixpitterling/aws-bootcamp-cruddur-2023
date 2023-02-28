# Week 2 — Distributed Tracing

## Homework

- [x] Instrument Honeycomb with OTEL
- [x] Instrument AWS X-Ray
- [x] Configure custom logger to send to CloudWatch Logs
- [x] Integrate Rollbar and capture and error  

## Homework Challenges

- [x] Instrument Honeycomb for the frontend-application to observe network latency between frontend and backend

- [] Add custom instrumentation to Honeycomb using a new span to add more attributes

- [] Run custom queries in Honeycomb and save them later

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

<br />

### _2. [NOT LIVE] Instrument XRay_

- AWS Observability Tool
  - Works best with lamda and serverless services
- Requires a daemon (not required in Honeycomb)
- Middleware is software for web applications that sits in between the client and your application (server)
  - Can handle authentication (white/black lists)
  - Make sure files are in the correct format and do not exceed a size limit

<br />

### _3. [NOT LIVE] Security Considerations: Observability vs Monitoring Explained in AWS (with Ashish Rajan)_

<br />

- Important assumptions:
  1. Application Workloads
  2. Monolith Applications (implementation - traditional)
  3. Microservice Applications (implementation - modern)
  4. Distributed Services
  5. Traditional Logging Systems

<br />

- Current state of logging:
  - On-Premise Logs
  - Cloud Logs
    - Infra and applications aspects will be different

<br />

- Why does logging suck?
  - Very time consuming spent analysing massive amounts of data

<br />

- Observability
  - Solves traditional logging probelms
  - Concept of concentrating on specific metrics
  - Benefits:
    1. Decreases alert fatigue for security ops teams
    2. Less time consuming process

<br />

- Observability vs Monitoring
  - Observability considers entire life cycles while monitoring is less detailed
  - Observability breaks down the entire application

<br />

- 3 Pillars of Observability
  1. Logs - Created by every applications
  2. Metrics - Enhances simple logs
  3. Traces - Provides a pin-point kind of analysis

<br />

- AWS realted services:
  - AWS CloudWatch Logs
  - AWS CloudWatch Metrics
  - AWS XRay Traces
  - Combining AWS loging and security requires more work to set up

<br />

- Instrumentation: Helps create/produce logs and metrics

<br />

- Potential security related metrics:
  - If a security group is changed do...
  - If a S3 bucket is exposed to the public do....

<br />

- Amazon Detective Service
  - Supports Amazon GuardDuty, AWS Security Hub, ...

<br />

- Building Security Metrics, Logs for Tracing:
  1. Start with threat modelling and identifying attack vectors
  2. Use existing complainace frameworks   
  3. Use in conjunction with Observability (ex: AWS Distro)

<br />

- Event Driven Security
  - using Amazon EventBridge and AWS Security Hub
  - severless 








