# Elevvo Backend Internship – Task 2

**Fault-Tolerant Async Data Engine**

## Description

This project implements a fault-tolerant asynchronous data engine in TypeScript that fetches data from multiple public APIs simultaneously using `Promise.allSettled()`.

Even if one or more endpoints fail, the rest continue to execute successfully. Errors are isolated and logged gracefully.

## Requirements Completed

- [x] Strict TypeScript configuration (`noImplicitAny`, `strictNullChecks`)
- [x] Multiple API calls using `Promise.allSettled()`
- [x] Strongly typed domain interfaces (no `any`)
- [x] Error isolation (one failure does not stop others)
- [x] Graceful error logging
- [x] Execution time measurement

## How to Run

```bash
npm install
npm start