import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    @MinLength(8)
    email: string

    @IsString()
    password: string
}