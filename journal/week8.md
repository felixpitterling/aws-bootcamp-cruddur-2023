# Week 8 — Serverless Image Processing


## Homework
- [] Implement CDK Stack
    - I learned and implemented the CDK stack using both the live and after-class videos
    - The configuration was done in [thumbing-serverless-cdk-stack.ts](./../thumbing-serverless-cdk/lib/thumbing-serverless-cdk-stack.ts). Overall we deploy/load two S3 Buckets, a Lambda and SNS notifications.
    - Important variables are defined in [.env](./../thumbing-serverless-cdk/.env)
    - The `cdk deploy` command is used to push the stack to CloudFormation


- [] Serve Avatars via CloudFront
- [] Implement Users Profile Page
- [] Implement Users Profile Form
- [] Implement Backend Migrations
- [] Presigned URL generation via Ruby Lambda
- [] HTTP API Gateway with Lambda Authorizer
- [] Create JWT Lambda Layer
- [] Render Avatars in App via CloudFront


## Class Notes

### _1. [LIVE] Serverless Image Processing_

- CDK = Infrastructure as Code (IaC)
- Can work with CloudFormation (JSON, YAML)
- AWS CDK is open-source
- CDK works well with other IaC tools
- Versions 1, 2
- **Constructs** Concept
    - L1 (Low-Level - CloudFormation level, CFN Resources)
    - L2 (Higher-Level, ex: S3 Buckets)
    - L3 (Patterns, Different types of cloud resources)
- Reduced complexity compared to CloudFormation
- **The CDK Book**



