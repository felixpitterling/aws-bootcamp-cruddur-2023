# Week 3 — Decentralized Authentication


## Class Notes

### _1. [LIVE] Decentralized Authenication Overview_

- Teaching content on adding Cognito to a backend with a custom login page does not really exist 
- A user pool is simply a group of uesrs
- Auth flow: process of authenticating a user
- Amplify SDK needed to use Cognito
- Amplify vs Firebase

### _2. [NOT LIVE] Exploring JWTs_

- JWT - JSON Web Token

- Attributes can be passed with a JWTs
  - Can not be ensured to be only client-side which does not make a good solution

- aws-jwt-verify is javscript only
  - Must be careful with community alternatives

- Middleware
  - Sits outside of the app.py
  - Must be in the same langauge as the backend
  - "Little" decoupled 

- Sidecar
  - Container Pattern
  - Middleware in its own container outside backend container
  - Diffcult to orchestrate and expensive 
  - "More" decoupled 

- Using an API gateway
  - External middleware
  - Expensive
  - "Most" decoupled 

- JWTs use a specific protocol and are encoded 


