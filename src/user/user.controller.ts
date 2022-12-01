import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CreateUserDto, UpdateNameDto } from './dtos';
import { UserService } from './user.service';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/')
  async create(@Body() dto: CreateUserDto, @Res() res: Response) {
    const user = await this.userService.insert(dto);

    res.status(HttpStatus.CREATED).json({
      user,
    });
  }

  @Get('/all')
  async all(@Res() res: Response) {
    const users = await this.userService.findAll();

    res.status(HttpStatus.OK).json({
      users: users,
    });
  }

  @Get('/info/:id')
  async info(@Param('id') id: number, @Res() res: Response) {
    const user = await this.userService.findOne(id);

    res.status(HttpStatus.OK).json({
      user,
    });
  }

  @Put('/name')
  async update(@Body() dto: UpdateNameDto, @Res() res: Response) {
    await this.userService.updateName(dto);

    res.status(HttpStatus.OK).json({});
  }
}
