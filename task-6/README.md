# Elevvo Backend Internship – Task 6

**Database Integration with Prisma ORM**

## Description

A backend application using Prisma ORM with SQLite database, following Layered Architecture and Dependency Injection.

## Features

- Prisma ORM
- SQLite database
- Layered Architecture (Controller → Service → Repository)
- Dependency Injection
- Full CRUD operations
- Automatic migrations

## Project Structure

src/
- controllers/product.controller.ts
- services/product.service.ts
- repositories/product.repository.ts
- app.ts
- server.ts

prisma/
- schema.prisma

## How to Run

npm install
npx prisma generate
npx prisma migrate dev
npm start

## Endpoints

- GET    /api/products
- GET    /api/products/:id
- POST   /api/products
- PUT    /api/products/:id
- DELETE /api/products/:id

## Author

Ahmad Yaar  
Elevvo Backend Internship