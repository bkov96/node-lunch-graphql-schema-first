import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { IMutation, IQuery } from 'src/graphql.schema';
import { CreateOwnerInput } from './inputs/create-owner.input';
import { OwnerService } from './owner.service';
import { Owner } from './objects/owner.object';
import { FindOwnerInput } from './inputs/find-owner.input';

@Resolver('Owner')
export class OwnerResolver implements Partial<IMutation>, Partial<IQuery> {
  constructor(private readonly ownerService: OwnerService) {}

  @Mutation()
  async createOwner(@Args('input') input: CreateOwnerInput): Promise<Owner> {
    const prismaOwner = await this.ownerService.createOwner(input);

    return new Owner({
      id: prismaOwner.id,
      firstName: prismaOwner.firstName,
      lastName: prismaOwner.lastName,
      cats: [],
    });
  }

  @Query()
  async findOwner(
    @Args('input') input: FindOwnerInput,
  ): Promise<Nullable<Owner>> {
    const prismaOwner = await this.ownerService.findOwner(input);

    return new Owner({
      id: prismaOwner.id,
      firstName: prismaOwner.firstName,
      lastName: prismaOwner.lastName,
      cats: [],
    });
  }
}
