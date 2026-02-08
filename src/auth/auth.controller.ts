import { Body, Controller, Post, Req, Session, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dtos/createUserDto';
import { AuthGuard } from 'src/guard/auth.guard';
import type { SessionData } from 'src/types/types'

@Controller('auth')
@ApiBearerAuth()
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('/signup')
    async register(@Body() body: CreateUserDto, @Session() session: SessionData) {
        const user = await this.authService.signup(body.email, body.password)
        session.userId = user.id
        return user
    }

    @Post('/signin')
    async login(@Body() body: CreateUserDto, @Session() session: SessionData) {
        const user = await this.authService.signin(body.email, body.password)
        session.userId = user.id
        return user
    }

    @UseGuards(AuthGuard)
    @Post('/logout')
    logout(@Session() session: SessionData) {
        session.userId = null
        return { message: 'Logged out' }
    }
}
