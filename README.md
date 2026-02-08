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

### Users
* user.controller.ts
    - GetAllUsers
    - FindUser
    - DeleteUserById
    - UpdatePassword

### Decorators
* current-user.decorator.ts
    - Get the currentUser from Request

### Interceptors
* serialize.inteceptor.ts
    - Response manupilated into UserDto to hide password
* current-user.iterceptor.ts
    - Give the currentUser to Request


### ExpenseController
* expense.controller.ts
    - Get all expenses by user
    - Create expense by user(CreateExpenseDto)
    - Find expense by user and id from Params
    - Update expense by user and id from Params(UpdateExpenseDto)
    - Delete expense by user and id from Params
    ** UserId comes from CurrentUser(From decorator)
    ** All routes check Authentification with AuthGuard

