import { Cat } from 'src/api/cat/objects/cat.object';
import { Owner as OwnerSchema } from 'src/graphql.schema';

export class Owner implements OwnerSchema {
  constructor(ownerSchema: Partial<OwnerSchema>) {
    Object.assign(this, ownerSchema);
  }

  id: string;
  firstName: string;
  lastName: string;
  cats: Cat[];
}
