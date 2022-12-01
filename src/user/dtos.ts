import { IsEmail, IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;
}

export class UpdateNameDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;
}
