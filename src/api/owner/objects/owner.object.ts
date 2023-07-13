import { Cat, Owner as OwnerSchema } from 'src/graphql.schema';

export class Owner implements OwnerSchema {
  constructor(ownerSchema: OwnerSchema) {
    Object.assign(this, ownerSchema);
  }

  id: string;
  firstName: string;
  lastName: string;
  cats: Cat[];
}
