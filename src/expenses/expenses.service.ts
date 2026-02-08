import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Expense } from 'src/common/expense.entity';
import { Repository } from 'typeorm';
import { CreateExpenseDto } from './dtos/createExpenseDto';
import { UpdateExpenseDto } from './dtos/updateExpenseDto';

@Injectable()
export class ExpensesService {
    constructor(@InjectRepository(Expense) private repo: Repository<Expense>) { }

    async create(data: CreateExpenseDto, userId: number) {
        const expense = this.repo.create({ ...data, userId })
        return this.repo.save(expense)
    }

    async getAllExpenses(userId: number) {
        const expenses = await this.repo.find({ where: { userId } })
        if (expenses.length === 0) throw new NotFoundException('No expenses exist')
        return expenses
    }

    async findExpense(id: number, userId: number) {
        return this.repo.findOneOrFail({ where: { id, userId } })
    }

    async update(id: number, userId: number, data: UpdateExpenseDto) {
        const expense = await this.repo.findOneOrFail({ where: { id, userId } })
        Object.assign(expense, { ...data, updatedAt: new Date() })
        this.repo.save(expense)
        return { message: 'The expense has been updated', expense }
    }

    async delete(id: number, userId: number) {
        const expense = await this.repo.findOneOrFail({ where: { id, userId } })
        this.repo.remove(expense)
        return { message: 'The expense has been removed' }
    }
}
