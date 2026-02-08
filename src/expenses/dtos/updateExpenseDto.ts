import { IsDateString, IsDecimal, IsOptional, IsString, MaxLength } from "class-validator"


export class UpdateExpenseDto {
    @IsDecimal({ decimal_digits: '0,2' })
    @IsOptional()
    amount?: string

    @IsString()
    @MaxLength(100)
    @IsOptional()
    category?: string

    @IsString()
    @IsOptional()
    description?: string

    @IsDateString()
    @IsOptional()
    date?: string
}