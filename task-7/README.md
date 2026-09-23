# Elevvo Backend Internship – Task 7

**Unit & Integration Testing with Jest + Supertest**

## Description

Professional test suite for the Product API using Jest and Supertest.

## Features

- Integration tests for all CRUD endpoints
- Database cleanup before each test
- Proper status code and response assertions
- Test isolation using `beforeEach` and `afterAll`

## Test Coverage

- Create product
- Validation (400 on missing fields)
- Get all products
- Get product by ID
- 404 handling
- Update product
- Delete product

## How to Run

```bash
npm install
npx prisma generate
npx prisma migrate dev
npm test