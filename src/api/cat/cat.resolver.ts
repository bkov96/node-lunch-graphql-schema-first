import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { IMutation, IQuery } from 'src/graphql.schema';
import { CatService } from './cat.service';
import { Cat } from './objects/cat.object';
import { CreateCatInput } from './inputs/create-cat.input';
import { FindCatInput } from './inputs/find-cat.input';

@Resolver()
export class CatResolver implements Partial<IMutation>, Partial<IQuery> {
  constructor(private readonly catService: CatService) {}

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
