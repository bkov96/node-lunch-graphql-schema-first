import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { IMutation } from 'src/graphql.schema';
import { CatService } from './cat.service';
import { Cat } from './objects/cat.object';
import { CreateCatInput } from './inputs/create-cat.input';

@Resolver()
export class CatResolver implements Partial<IMutation> {
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
}
