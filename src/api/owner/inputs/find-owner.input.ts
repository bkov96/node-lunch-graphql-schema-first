import { IsString, IsUUID } from 'class-validator';
import { IFindOwnerInput } from 'src/graphql.schema';

export class FindOwnerInput implements IFindOwnerInput {
  @IsString()
  @IsUUID()
  id: string;
}
