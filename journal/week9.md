# Week 9 — CI/CD with CodePipeline, CodeBuild and CodeDeploy

```yml
  pre_build:
    commands:
      - echo Running pre-build tasks...
      - cd $CODEBUILD_SRC_DIR/backend-flask
      - pytest unit-test.py
```

## Class Notes

### _1. [LIVE] CI/CD Overview_


### _2. [NOT LIVE] CI/CD Pipeline SECURITY EXPLAINED FOR AWS_

- CI/CD = Continuous Integration / Continuous Development
- AWS Services: CodeCommit, CodeBuild, CodeDeploy, CodePipeline
- CodePipeline orchestrates the services 
- GitHub is not the only code repo option
- OWASP Top 10 CI/CD

- AWS Side:
  - Compliance standard (region specific)   
  - Add Organizations SCP (especially in prod environment)
  - AWS CloudTrail, GuardDuty is enabled
  - AWS Config Rules (limited as of now)

- Application Side:
  - Correct Roles and IAM configuration
  - Security of/in the CI/CD Pipeline
    - ex: secret management, SCA. SAST
  - Secure API, no public endpoints


