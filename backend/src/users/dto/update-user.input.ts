import { InputType } from '@nestjs/graphql';
import { CreateUserInput } from './create-user.input';
import { PartialType, OmitType } from '@nestjs/mapped-types';

@InputType()
export class UpdateUserInput extends PartialType(
  OmitType(CreateUserInput, ['email'] as const),
) {
  id: string;
}
