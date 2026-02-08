import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CommonEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    creaetedAt: Date

    @Column({ type: 'datetime', nullable: true, default: null })
    updatedAt: Date | null
}