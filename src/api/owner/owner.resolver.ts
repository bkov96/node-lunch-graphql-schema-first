import {
  Args,
  Mutation,
  Query,
  ResolveField,
  Resolver,
  Root,
} from '@nestjs/graphql';
import { IMutation, IQuery } from 'src/graphql.schema';
import { Cat } from '../cat/objects/cat.object';
import { CreateOwnerInput } from './inputs/create-owner.input';
import { FindOwnerInput } from './inputs/find-owner.input';
import { Owner } from './objects/owner.object';
import { OwnerService } from './owner.service';

@Resolver('Owner')
export class OwnerResolver implements Partial<IMutation>, Partial<IQuery> {
  constructor(private readonly ownerService: OwnerService) {}

  @ResolveField()
  async cats(@Root() owner: Owner): Promise<Cat[]> {
    const prismaCats = await this.ownerService.findRelatedCats(owner.id);

    return prismaCats.map(
      (prismaCat) =>
        new Cat({
          id: prismaCat.id,
          name: prismaCat.name,
          age: prismaCat.age,
          owner,
        }),
    );
  }

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
    });
  }
}
