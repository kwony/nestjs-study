import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateUserDto } from '../user/dtos';
import { User } from '../user/user.entity';

@Injectable()
export class StudyService {
  constructor(private dataSource: DataSource) {}

  async createUser(createUserDto: CreateUserDto) {
    const user = new User();

    user.name = createUserDto.name;

    return await this.dataSource.getRepository(User).save(user);
  }

  async findOne(id: number) {
    return await this.dataSource.getRepository(User).findOne({
      where: {
        id: id,
      },
    });
  }
}
