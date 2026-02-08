import { Column, Entity } from "typeorm";
import { CommonEntity } from "./commonEntity";

@Entity({ name: "expenses" })
export class Expense extends CommonEntity {
    @Column("decimal", { precision: 10, scale: 2, nullable: false })
    amount: string;

    @Column("varchar", { length: 100, nullable: false })
    category: string;

    @Column("text", { nullable: true })
    description: string;

    @Column("date", { nullable: false })
    date: string;

    @Column("int", { nullable: false })
    userId: number;
}
