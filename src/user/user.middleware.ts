import { Injectable, NestMiddleware } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  async use(req: any, res: any, next: () => void) {
    const users = await this.repository.find();
    console.log('middleware running');
    console.log(users);
    next();
  }
}
