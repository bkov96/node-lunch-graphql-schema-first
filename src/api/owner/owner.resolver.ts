import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { IMutation } from 'src/graphql.schema';
import { CreateOwnerInput } from './inputs/create-owner.input';
import { OwnerService } from './owner.service';
import { OwnerSchema } from './schemas/owner.schema';

@Resolver('Owner')
export class OwnerResolver implements Partial<IMutation> {
  constructor(private readonly ownerService: OwnerService) {}

  @Mutation()
  async createOwner(
    @Args('input') input: CreateOwnerInput,
  ): Promise<OwnerSchema> {
    const prismaOwner = await this.ownerService.createOwner(input);

    return new OwnerSchema({
      id: prismaOwner.id,
      firstName: prismaOwner.firstName,
      lastName: prismaOwner.lastName,
      cats: [],
    });
  }
}
