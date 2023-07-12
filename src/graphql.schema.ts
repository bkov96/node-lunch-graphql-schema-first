
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Cat {
    id: string;
    name: string;
    age?: Nullable<number>;
    owner?: Nullable<Owner>;
}

export interface IQuery {
    findCat(id: string): Nullable<Cat> | Promise<Nullable<Cat>>;
    findCats(): Nullable<Cat>[] | Promise<Nullable<Cat>[]>;
    findStrayCats(): Nullable<Cat>[] | Promise<Nullable<Cat>[]>;
    findOwner(id: string): Nullable<Owner> | Promise<Nullable<Owner>>;
    findOwners(): Nullable<Owner>[] | Promise<Nullable<Owner>[]>;
}

export interface IMutation {
    createCat(name: string, age?: Nullable<number>, ownerId?: Nullable<string>): Cat | Promise<Cat>;
    createOwner(firstName: string, lastName: string): Owner | Promise<Owner>;
}

export interface Owner {
    id: string;
    firstName: string;
    lastName: string;
    cats: Nullable<Cat>[];
}

type Nullable<T> = T | null;
