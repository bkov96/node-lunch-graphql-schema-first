import { Owner } from 'src/api/owner/objects/owner.object';
import { Cat as CatSchema } from 'src/graphql.schema';

export class Cat implements CatSchema {
  constructor(catSchema: Partial<CatSchema>) {
    Object.assign(this, catSchema);
  }

  id: string;
  name: string;
  age?: number;
  owner?: Owner;
}
