### NestJS Expense-Tracker App

This App is created using NestJS, TypeORM

### 🚀 Texnologiyalar
    - Node.js
    - NestJS
    - TypeScript
    - TypeORM
    - class-validator / class-transformer

### 🔐 Authentication Flow
* Register
    - Check User existing
    - Hash password with bcrypt
    - Register newUser
    - Keep the userId in cookie-session
* Login
    - Find User with UserService from DB
    - Check the existing
    - Match the password
    - Keep the userId in cookie-session
    - Login User
* Logout
    - Clear session.userId

### 🛡 AuthGuard
* auth.guard.ts faylında:
    - AuthGuard check request.session or request.session.userId
    - If doesnt exists => UnauthorizedException
    - If exists => return true

### UserController
    - GetAllUsers