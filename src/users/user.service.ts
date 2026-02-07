import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../common/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private repo: Repository<User>) { }

    async create(email: string, password: string) {
        const user = this.repo.create({ email, password })
        return this.repo.save(user)
    }

    async findAll() {
        return this.repo.find()
    }

    async findByEmail(email: string) {
        return this.repo.findOne({ where: { email } })
    }
}
