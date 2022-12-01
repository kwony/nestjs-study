import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateNameDto } from './dtos';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<User> {
    return this.repository.findOneBy({
      id,
    });
  }

  async insert(userDto: CreateUserDto) {
    const user = new User();
    user.name = userDto.name;

    this.repository.save(user);
  }

  async updateName(dto: UpdateNameDto) {
    const user = await this.repository.findOneBy({
      id: dto.id,
    });

    user.name = dto.name;

    await this.repository.save(user);
  }
}
