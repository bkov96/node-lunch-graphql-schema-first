
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface IFindCatInput {
    id: string;
}

export interface ICreateCatInput {
    name: string;
    age?: Nullable<number>;
    ownerId?: Nullable<string>;
}

export interface IFindOwnerInput {
    id: string;
}

export interface ICreateOwnerInput {
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
    findCat(input: IFindCatInput): Nullable<Cat> | Promise<Nullable<Cat>>;
    findCats(): Cat[] | Promise<Cat[]>;
    findStrayCats(): Cat[] | Promise<Cat[]>;
    findOwner(input: IFindOwnerInput): Nullable<Owner> | Promise<Nullable<Owner>>;
    findOwners(): Owner[] | Promise<Owner[]>;
    testConnection(): string | Promise<string>;
}

export interface IMutation {
    createCat(input: ICreateCatInput): Cat | Promise<Cat>;
    createOwner(input: ICreateOwnerInput): Owner | Promise<Owner>;
}

export interface Owner {
    id: string;
    firstName: string;
    lastName: string;
    cats: Nullable<Cat>[];
}

type Nullable<T> = T | null;
