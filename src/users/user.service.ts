import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../common/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private repo: Repository<User>) { }

    async create(email: string, password: string) {
        const user = this.repo.create({ email, password })
        return this.repo.save(user)
    }

    async updateUser(id: number, newPassword: string) {
        const user = await this.repo.findOneOrFail({ where: { id } })
        const isSame = await bcrypt.compare(newPassword, user.password)
        if (isSame) throw new BadRequestException('Can not accepted the same password')
        user.password = await bcrypt.hash(newPassword, 10)
        await this.repo.save(user)
        return { message: 'Password has been updated' }
    }

    async findAll() {
        return this.repo.find()
    }

    async findByEmail(email: string) {
        return this.repo.findOneOrFail({ where: { email } })
    }

    async findById(id: number) {
        return this.repo.findOneOrFail({ where: { id } })
    }

    async deleteUser(id: number) {
        const user = await this.repo.findOneOrFail({ where: { id } })
        await this.repo.remove(user)
        return { message: 'User removed' }
    }
}
