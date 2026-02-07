import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from 'src/users/user.service';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(private userService: UserService) { }

    async signup(email: string, password: string) {
        const user = await this.userService.findByEmail(email)
        if (user) throw new BadRequestException('This User already exists')
        const passwordHashed = await bcrypt.hash(password, 10)
        const newUser = await this.userService.create(email, passwordHashed)
        return newUser
    }

    async signin(email: string, password: string) {
        const user = await this.userService.findByEmail(email)
        if (!user) throw new NotFoundException('User with this email not found')
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) throw new BadRequestException('Password is wrong')
        return user
    }
}
