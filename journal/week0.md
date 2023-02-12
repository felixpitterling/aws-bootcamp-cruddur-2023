# Week 0 — Billing and Architecture

## Bootcamp Intro Notes

- 14 Week bootcamp (possibly longer)
- CRUD App

## Class Notes

### _Random Notes_

> Soft Skills are important for interviews - Shala Warner

> The sustainability pillar is the underdog - Margaret Valtierra

- 4C Model vs TOGAF vs DOD Framework vs ...
  - All ask the same question: how to make sometimg complicated → simple

### _1. Real-Life Scenario (with Margaret Valtierra)_

- Situation: Metting with investors and & board
- Big-Idea: CRUD Social Media App
- User Target: Students & Busy Professionals
- Concepts:
  - TIme-Limited Content
  - Authentication
  - **Microservice** architecture
    - Seperate authentication, UI, bussiness, logic
    - Platform of choice: AWS
- Iron Triangle (Scope, Time, Cost - Choose two)
- Front-End: JS + React
- Back-End: Pyhon + Flask
- **Technical report due for investors**
  - Architecture
  - Budget
  - Ongoing cost estimate
- Team: Web dev group, investors, CTO

### _2. App Overview & Diagrams (with Chris Williams)_

- Concepts
  - CRUD's which expire over time
  - Login
  - Replies
  - Direct Messaging
- What is good architecture
  - Have a common definition/requirements/constraints framework with the customer
  - Requirements (MUSTS):
    - Verifiable
    - Monitorable
    - Traceable
    - Feasible
    - Examples: ISO standards, uptime
  - Risks, Assumptions & Constraints
    - Risks: SPoFS, User Commitment, Late Delivery
    - Assumptions: Network bandwidth, budget
    - Constraints: Time, Budget (essentially nothing), Vendor Selection
- Designs
  - Conceptual Design ("napkin design") → Logical Design ("blueprint") → Physical Design ("detailed plan")
  - AWS Six Pillars & AWS Well-Architected Framework
- Common dictionary
  - ask "dumb questions"
  - play be-the-packet
  - document everything
- Charts
  - LucidCharts has AWS icons built-in
  - Good Idea: Start with a user on the diagram

### _3. Homework Notes_

- Ideas in the Google Doc are suggested
- Do more than expected to get Red Squad
- 30 minutes on diagram
- Submit by next class

### _4. [NOT LIVE] Generate Credentials, AWS CLI, Budget and Billing Alarm (with Andrew Brown)_

- AWS Budgets: Getting an alert after a certain amount has been meet
  - Zero spend budget is a good option
  - Usage vs Cost budgets
- IAM & Root User Setup
- gitpod.yml is useful for installing things
- Installed aws-cli in gitpod environment
- bash scripting language
- Concept of binary files and /usr/local/bin
- Concept of path environment variable
  - Items are seperated by a colon
  - $ is a environment variable initializer
  - Can be added into scripts (example: AWS IaC stuff)
