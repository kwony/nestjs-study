/* https://docs.nestjs.com/controllers */

import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto } from '../user/dtos';
import { StudyService } from './study.service';

export class StudyDto {
  name: string;
  age: number;
  breed: string | null;
}

@Controller('study')
export class StudyController {
  constructor(private studyService: StudyService) {}

  @Get('get')
  getHelp(
    @Res() res: Response,
    @Query('name') name: string,
    @Query('age') age: number,
  ) {
    res.status(HttpStatus.OK).json({
      hello: 'world',
      name: name,
      age: age,
    });
  }

  @Post('post')
  create(@Body() dto: StudyDto, @Res() res: Response) {
    res.status(HttpStatus.OK).json({
      dto: dto,
    });
  }

  @Post('user')
  async createUser(@Body() dto: CreateUserDto, @Res() res: Response) {
    const user = await this.studyService.createUser(dto);

    res.status(HttpStatus.OK).json({
      user,
    });
  }

  @Get('user/:id')
  async findOne(@Param('id') id: number, @Res() res: Response) {
    const user = await this.studyService.findOne(id);

    res.status(HttpStatus.OK).json({
      user,
    });
  }
}
