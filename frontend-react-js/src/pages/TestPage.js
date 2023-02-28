import React from "react";
import { trace } from '@opentelemetry/api';
// import { trace, context } from '@opentelemetry/api';

export default function TestPage() {
  const tracer = trace.getTracer();

  return (
    tracer.startActiveSpan('document_load', span => {
      //start span when navigating to page
      span.setAttribute('pageUrlwindow', window.location.href);
      window.onload = (event) => {
        span.end(); //once page is loaded, end the span
      };
    })
  );
}