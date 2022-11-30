import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudyController } from './study/study.controller';
import { CatsControllerController } from './cats/cats.controller';

@Module({
  imports: [],
  controllers: [AppController, StudyController, CatsControllerController],
  providers: [AppService],
})
export class AppModule {}
