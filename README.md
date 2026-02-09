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
    - Get total expenses.amount
    ** UserId comes from CurrentUser(From decorator)
    ** All routes check Authentification with AuthGuard

### Folder structure
    ├── src
    │   ├── auth
    │   │   ├── auth.controller.spec.ts
    │   │   ├── auth.controller.ts
    │   │   ├── auth.module.ts
    │   │   ├── auth.service.spec.ts
    │   │   └── auth.service.ts
    │   ├── common
    │   │   ├── commonEntity.ts
    │   │   ├── expense.entity.ts
    │   │   └── user.entity.ts
    │   ├── decorators
    │   │   └── current-user.decorator.ts
    │   ├── expenses
    │   │   ├── dtos
    │   │   │   ├── createExpenseDto.ts
    │   │   │   └── updateExpenseDto.ts
    │   │   ├── expenses.controller.spec.ts
    │   │   ├── expenses.controller.ts
    │   │   ├── expenses.module.ts
    │   │   ├── expenses.service.spec.ts
    │   │   ├── expenses.service.ts
    │   │   └── reuqest.http
    │   ├── guard
    │   │   └── auth.guard.ts
    │   ├── interceptors
    │   │   ├── current-user.interceptor.ts
    │   │   └── serialize.inteceptor.ts
    │   ├── types
    │   │   └── types.ts
    │   ├── users
    │   │   ├── dtos
    │   │   │   ├── createUserDto.ts
    │   │   │   ├── message.dto.ts
    │   │   │   ├── updateUserDto.ts
    │   │   │   └── user.dto.ts
    │   │   ├── request.http
    │   │   ├── user.controller.spec.ts
    │   │   ├── user.controller.ts
    │   │   ├── user.module.ts
    │   │   ├── user.service.spec.ts
    │   │   └── user.service.ts
    │   ├── app.controller.spec.ts
    │   ├── app.controller.ts
    │   ├── app.module.ts
    │   ├── app.service.ts
    │   └── main.ts
    ├── test
    │   ├── app.e2e-spec.ts
    │   └── jest-e2e.json
    ├── .gitignore
    ├── .prettierrc
    ├── MyNotes.md
    ├── README.md
    ├── db.sqlite
    ├── eslint.config.mjs
    ├── nest-cli.json
    ├── package-lock.json
    ├── package.json
    └── tsconfig.json
