# Elevvo Backend Internship – Task 10

**CI/CD Pipeline with GitHub Actions**

## Description

Automated Continuous Integration pipeline using GitHub Actions.

## What it does

- Triggers on every push to `main`
- Installs dependencies
- Generates Prisma Client
- Runs all tests (Jest + Supertest)
- Checks TypeScript compilation

## Workflow File

`.github/workflows/ci.yml`

## How to see it working

1. Push any change to the repository
2. Go to the **Actions** tab on GitHub
3. You will see the workflow running automatically

## Author

Ahmad Yaar  
Elevvo Backend Internship