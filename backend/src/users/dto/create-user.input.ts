import { Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

export class CreateUserInput {
  @Field()
  @IsNotEmpty()
  email: string;

  @Field()
  password: string;
}
