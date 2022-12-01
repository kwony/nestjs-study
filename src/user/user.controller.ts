import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDto, UpdateNameDto } from './dtos';
import { UserService } from './user.service';
import { Response } from 'express';
import { TransformInterceptor } from 'src/transform/transform.interceptor';
import { User } from './user.entity';
import { CustomException } from 'src/exception/custom.exception';

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

    return users;
    res.status(HttpStatus.OK).json({
      users: users,
    });
  }

  @Get('/info/:id')
  async info(@Param('id') id: number): Promise<any> {
    const user = await this.userService.findOne(id);

    return {
      user: user,
    };
    // res.status(HttpStatus.OK).json({
    //   user,
    // });
  }

  @Put('/name')
  async update(@Body() dto: UpdateNameDto, @Res() res: Response) {
    await this.userService.updateName(dto);

    res.status(HttpStatus.OK).json({});
  }

  @Get('/error')
  async error() {
    throw new CustomException('hello error');
    throw new ForbiddenException();
  }
}
