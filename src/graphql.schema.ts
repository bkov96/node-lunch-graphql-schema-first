
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface FindCatInput {
    id: string;
}

export interface CreateCatInput {
    name: string;
    age?: Nullable<number>;
    ownerId?: Nullable<string>;
}

export interface FindOwnerInput {
    id: string;
}

export interface CreateOwnerInput {
    firstName: string;
    lastName: string;
}

export interface Cat {
    id: string;
    name: string;
    age?: Nullable<number>;
    owner?: Nullable<Owner>;
}

export interface IQuery {
    findCat(input: FindCatInput): Nullable<Cat> | Promise<Nullable<Cat>>;
    findCats(): Cat[] | Promise<Cat[]>;
    findStrayCats(): Cat[] | Promise<Cat[]>;
    findOwner(input: FindOwnerInput): Nullable<Owner> | Promise<Nullable<Owner>>;
    findOwners(): Owner[] | Promise<Owner[]>;
}

export interface IMutation {
    createCat(input: CreateCatInput): Cat | Promise<Cat>;
    createOwner(input: CreateOwnerInput): Owner | Promise<Owner>;
}

export interface Owner {
    id: string;
    firstName: string;
    lastName: string;
    cats: Nullable<Cat>[];
}

type Nullable<T> = T | null;
