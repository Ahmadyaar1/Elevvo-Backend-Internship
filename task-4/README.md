# Elevvo Backend Internship – Task 4

**Stateless JWT Authentication & Threat Mitigation**

## Features

- User registration with bcrypt password hashing
- Login endpoint that issues JWT
- authenticateToken middleware
- authorizeRole middleware (USER / ADMIN)
- Helmet security headers
- CORS restriction
- Rate limiting on login (5 requests / 15 min)

## How to Run

```bash
npm install
npm start