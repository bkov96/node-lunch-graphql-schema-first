import { IsString, Length } from 'class-validator';
import { ICreateOwnerInput } from 'src/graphql.schema';

export class CreateOwnerInput implements ICreateOwnerInput {
  @IsString()
  @Length(1, 128)
  firstName: string;

  @IsString()
  @Length(1, 128)
  lastName: string;
}
