import {
  Args,
  Mutation,
  Query,
  ResolveField,
  Resolver,
  Root,
} from '@nestjs/graphql';
import { IMutation, IQuery } from 'src/graphql.schema';
import { CatService } from './cat.service';
import { Cat } from './objects/cat.object';
import { CreateCatInput } from './inputs/create-cat.input';
import { FindCatInput } from './inputs/find-cat.input';
import { Owner } from '../owner/objects/owner.object';

@Resolver('Cat')
export class CatResolver implements Partial<IMutation>, Partial<IQuery> {
  constructor(private readonly catService: CatService) {}

  @ResolveField()
  async owner(@Root() cat: Cat): Promise<Nullable<Owner>> {
    const prismaOwner = await this.catService.findRelatedOwner(cat.id);

    if (!prismaOwner) {
      return null;
    }

    return new Owner({
      id: prismaOwner.id,
      firstName: prismaOwner.firstName,
      lastName: prismaOwner.lastName,
    });
  }

  @Mutation()
  async createCat(@Args('input') input: CreateCatInput): Promise<Cat> {
    const prismaCat = await this.catService.createCat(input);

    return new Cat({
      id: prismaCat.id,
      name: prismaCat.name,
      age: prismaCat.age,
    });
  }

  @Query()
  async findCat(@Args('input') input: FindCatInput): Promise<Nullable<Cat>> {
    const prismaCat = await this.catService.findCat(input);

    if (!prismaCat) {
      return null;
    }

    return new Cat({
      id: prismaCat.id,
      name: prismaCat.name,
      age: prismaCat.age,
    });
  }
}
