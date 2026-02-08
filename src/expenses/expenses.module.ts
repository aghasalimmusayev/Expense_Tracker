import { Module } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from 'src/common/expense.entity';
import { ExpensesController } from './expenses.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Expense])],
  controllers: [ExpensesController],
  providers: [ExpensesService]
})
export class ExpensesModule { }
