# Week 5 — DynamoDB and Serverless Caching

## Class Notes

### _1. [LIVE] NoSQL and Caching Overview_

- aka. DynamoDB and Serverless Caching
- DynamoDB stores key-value and document data
  - Can still be viewed as a table
- Data modelling is considered the most difficult aspect
- Caching application: direct messaging feature
- Pre-planning aspect is critical
- With NoSQL the "questions" that are asked are (at its best) pre-computed making it a inexpensive, fast and scalable solution
- Single table design
- Important questions: when? where? how fast? is data needed
- Access patterns: the way in which a program or system accesses data stored in memory
  - Pattern A (showing a single conversation)
  - Pattern B (list of conversation)
  - Pattern C (create a message)
  - Pattern D (update a message_group for the last message)
- Flat tables: Type of database table where all the data is stored in a single table
- PartiQL for DynamoDB (use SQL operations with NoSQL)
- Primary keys, partition keys and sort keys
- AWS NoSQL Workbench: Playground environment
- GSI & LSI:
  - Allows users to query data using an alternate key instead of the primary key
  - LSI vs GSI: The main difference between GSI and LSI is that GSI can be created on any attribute (and hence can be non-unique, get-item does not work) in a table, while LSI can only be created on attributes that are part of the table's sort key. 
- UUIDs are not always the best choice for a sort key
  - Rather check the data "you have on hand" 
- PK (Primary Key) / SK (Sort Key) Pattern


