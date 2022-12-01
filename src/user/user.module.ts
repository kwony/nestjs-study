import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { UserController } from './user.controller';
import { UserMiddleware } from './user.middleware';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserMiddleware)
      /* 빼고 싶은 경로만 여기에 세팅해주면됨 */
      .exclude({
        path: 'user/all',
        method: RequestMethod.GET,
      })
      .forRoutes('user');
  }
}
