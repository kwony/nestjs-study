import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudyController } from './study/study.controller';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudyService } from './study/study.service';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    /** 이렇게만 하면 DataSource랑 EntityManager가 어디서든 접근이 가능하게 된다*/
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'common',
      password: 'common',
      database: 'common',
      synchronize: true,
      logging: true,
      entities: [User],
    }),
    UserModule,
  ],
  controllers: [AppController, StudyController, CatsController],
  providers: [AppService, CatsService, StudyService],
})
export class AppModule {}
