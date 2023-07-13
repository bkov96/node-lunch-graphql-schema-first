import { Cat, Owner } from 'src/graphql.schema';

export class OwnerSchema implements Owner {
  constructor(owner: Owner) {
    Object.assign(this, owner);
  }

  id: string;
  firstName: string;
  lastName: string;
  cats: Cat[];
}
