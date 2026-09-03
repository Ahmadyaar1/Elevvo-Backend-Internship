# Elevvo Backend Internship – Task 1

**Web Request Inspector & Raw HTTP Server**

## Description

This project implements a raw Node.js HTTP server using only the built-in `http` module (no Express or other frameworks).

It demonstrates:
- Native Node.js routing
- Proper HTTP status codes
- JSON responses with correct headers
- Basic observability (request logging)
- Health check endpoint (bonus)

## Requirements Completed

- [x] Raw HTTP server using only `http` module
- [x] `GET /` → returns welcome message + available endpoints
- [x] `GET /api/users` → returns JSON list of users
- [x] Proper `Content-Type: application/json` header
- [x] 404 handling for unknown routes
- [x] Bonus: `GET /api/health` (uptime, platform, ISO timestamp)

## How to Run

```bash
node server.js