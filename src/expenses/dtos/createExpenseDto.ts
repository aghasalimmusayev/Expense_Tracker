import { IsDateString, IsDecimal, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateExpenseDto {
    @IsDecimal({ decimal_digits: '0,2' })
    amount: string

    @IsString()
    @MaxLength(100)
    category: string

    @IsString()
    @IsOptional()
    description?: string

    @IsDateString()
    date: string // 2026-02-08
}