import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudyController } from './study/study.controller';

@Module({
  imports: [],
  controllers: [AppController, StudyController],
  providers: [AppService],
})
export class AppModule {}
