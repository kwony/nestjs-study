import { IsEmail, IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;
}
