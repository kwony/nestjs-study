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
import { CreateUserDto } from './dto/dtos';

export class StudyDto {
  name: string;
  age: number;
  breed: string | null;
}

@Controller('study')
export class StudyController {
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
  createUser(@Body() dto: CreateUserDto, @Res() res: Response) {
    res.status(HttpStatus.OK).json({
      dto: dto,
    });
  }

  @Get('one/:id')
  findOne(@Param('id') id: number, @Res() res: Response) {
    console.log(id);
    res.status(HttpStatus.OK).json({
      id: id,
    });
  }
}
