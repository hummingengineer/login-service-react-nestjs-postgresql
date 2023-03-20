import { CreateUserInput } from './create-user.input';
import { PartialType, OmitType } from '@nestjs/mapped-types';

export class UpdateUserInput extends PartialType(
  OmitType(CreateUserInput, ['email'] as const),
) {
  id: string;
}
