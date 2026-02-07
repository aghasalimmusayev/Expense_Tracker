import { Column, Entity } from "typeorm";
import { CommonEntity } from "./commonEntity";

@Entity()
export class User extends CommonEntity {
    @Column()
    email: string

    @Column()
    password: string
}
