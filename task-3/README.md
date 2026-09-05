# Elevvo Backend Internship – Task 3

**Observability & Modular Express API Architecture**

## Description

A clean, modular Express.js API built with TypeScript following the Controller-Service pattern.

## Features

- Modular architecture (Routes, Controllers, Services)
- Global Observability Middleware (logs method, URL, status, duration)
- Full CRUD for Users
- API Key protection middleware (Bonus)
- Proper status codes and JSON responses

## Project Structure

src/
- controllers/
  - user.controller.ts
- services/
  - user.service.ts
- middleware/
  - observability.middleware.ts
  - apiKey.middleware.ts
- routes/
  - user.routes.ts
- app.ts
- server.ts

## How to Run

npm install
npm start

## API Key

All /api/users routes require this header:

x-api-key: elevvo-secret-key-123

## Endpoints

- GET    /api/users         → Get all users
- GET    /api/users/:id     → Get user by ID
- POST   /api/users         → Create new user
- PUT    /api/users/:id     → Update user
- DELETE /api/users/:id     → Delete user

## Author

Ahmad Yaar  
Elevvo Backend Internship