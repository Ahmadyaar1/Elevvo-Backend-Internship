# Elevvo Backend Internship – Task 5

**Layered Architecture & Dependency Injection (DI)**

## Description

A clean multi-layered backend architecture using Dependency Injection.

## Architecture

Controller → Service → Repository

- Controllers handle HTTP requests
- Services contain business logic
- Repositories handle data access

## Features

- Constructor-based Dependency Injection
- Repository Pattern with interface
- Loose coupling between layers
- Easy to swap repository implementations (Bonus)
- Full CRUD for Products

## Project Structure

src/
- controllers/product.controller.ts
- services/product.service.ts
- repositories/in-memory-product.repository.ts
- models/product.model.ts
- types/repository.interface.ts
- app.ts
- server.ts

## How to Run

npm install
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