import { Field } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserInput {
  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  password: string;
}
