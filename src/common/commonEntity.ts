import { BaseEntity, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CommonEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    creaetedAt: Date

    @CreateDateColumn()
    updatedAt: Date
}