import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CustomException } from 'src/exception/custom.exception';

@Catch(CustomException)
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: CustomException, host: ArgumentsHost) {
    console.log('i am here...');

    console.log(exception);

    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(HttpStatus.OK).json({
      error: '1234',
      errorCode: exception.code,
    });
  }
}
