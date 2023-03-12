import { Field } from '@nestjs/graphql';

export class CreateUserInput {
  @Field()
  email: string;
}
