import {
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Length,
  Max,
  Min,
} from 'class-validator';
import { ICreateCatInput } from 'src/graphql.schema';

export class CreateCatInput implements ICreateCatInput {
  @IsString()
  @Length(1, 128)
  name: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(128)
  age?: number;

  @IsOptional()
  @IsString()
  @IsUUID()
  ownerId?: string;
}
