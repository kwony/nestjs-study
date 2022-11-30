import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import {
  CreateCatDto,
  ListAllEntities,
  UpdateCatDto,
} from 'src/cats/dto/CreateCatDto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  /**
   * validation pipe 을 이용하면 CreateCatDto에서 넘어오지 않은것도 정리할 수 있다고 한다.
   * https://docs.nestjs.com/techniques/validation#stripping-properties
   * */
  @Post()
  create(@Res() res: Response, @Body() createCatDto: CreateCatDto) {
    console.log(createCatDto);
    this.catsService.create(createCatDto);
    res.status(HttpStatus.CREATED).send();
  }

  @Get()
  findAll(@Res() res: Response, @Query() query: ListAllEntities) {
    res.status(HttpStatus.OK).json([]);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
