import { Body, Controller, Get, Param, Patch, Req, Session, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Serialize } from 'src/interceptors/serialize.inteceptor';
import { UserDto } from './dtos/user.dto';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { User } from 'src/common/user.entity';
import { AuthGuard } from 'src/guard/auth.guard';
import { UpdateUserDto } from './dtos/updateUserDto';
import { MessageDto } from './dtos/message.dto';

@Controller('users')
@Serialize(UserDto)
export class UsersController {
    constructor(private userService: UserService) { }

    @Get('/all')
    getAllUsers() {
        return this.userService.findAll()
    }

    @UseGuards(AuthGuard)
    @Get('/currentUser')
    getUser(@CurrentUser() user: User, @Req() req: any) {
        return user
    }

    @Get('/:id')
    getUserById(@Param('id') id: string) {
        return this.userService.findById(Number(id))
    }

    @Get('/byMail')
    getUserByEmail(@Body() body: { email: string }) {
        return this.userService.findByEmail(body.email)
    }

    @UseGuards(AuthGuard)
    @Patch('/')
    @Serialize(MessageDto)
    updateUser(@CurrentUser() user: User, @Body() body: UpdateUserDto) {
        return this.userService.updateUser(Number(user.id), body.password)
    }
}
