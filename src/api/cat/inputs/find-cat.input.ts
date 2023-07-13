import { IsString, IsUUID } from 'class-validator';
import { IFindCatInput } from 'src/graphql.schema';

export class FindCatInput implements IFindCatInput {
  @IsString()
  @IsUUID()
  id: string;
}
