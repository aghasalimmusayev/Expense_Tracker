import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { CreateExpenseDto } from './dtos/createExpenseDto';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { User } from 'src/common/user.entity';
import { AuthGuard } from 'src/guard/auth.guard';
import { UpdateExpenseDto } from './dtos/updateExpenseDto';

@Controller('expenses')
@UseGuards(AuthGuard)
export class ExpensesController {
    constructor(private expenseService: ExpensesService) { }

    @Get('/all')
    async getAllExpenses(@CurrentUser() user: User) {
        return await this.expenseService.getAllExpenses(user.id)
    }

    @Post('/')
    async createExpense(@Body() body: CreateExpenseDto, @CurrentUser() user: User) {
        const expense = await this.expenseService.create(body, user.id)
        return expense
    }

    @Get('/:id')
    async findExpenseById(@Param('id', ParseIntPipe) id: number, @CurrentUser() user: User) {
        return await this.expenseService.findExpense(id, user.id)
    }

    @Patch('/:id')
    async updateExpense(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateExpenseDto, @CurrentUser() user: User) {
        return await this.expenseService.update(id, user.id, body)
    }

    @Delete('/:id')
    async deleteExpense(@Param('id', ParseIntPipe) id: number, @CurrentUser() user: User) {
        return await this.expenseService.delete(id, user.id)
    }
}
