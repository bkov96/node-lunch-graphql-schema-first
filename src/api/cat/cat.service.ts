import { Injectable } from '@nestjs/common';
import { Owner as PrismaOwner, Cat as PrismaCat } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { ICreateCatInput, IFindCatInput } from 'src/graphql.schema';

@Injectable()
export class CatService {
  constructor(private prisma: PrismaService) {}

  createCat(input: ICreateCatInput): Promise<PrismaCat> {
    if (!input.ownerId) {
      return this.createStrayCat(input);
    }

    return this.prisma.cat.create({
      data: {
        name: input.name,
        age: input.age,
        owner: {
          connect: {
            id: input.ownerId,
          },
        },
      },
    });
  }

  createStrayCat(input: Omit<ICreateCatInput, 'ownerId'>): Promise<PrismaCat> {
    return this.prisma.cat.create({
      data: {
        name: input.name,
        age: input.age,
      },
    });
  }

  findCat(input: IFindCatInput): Promise<Nullable<PrismaCat>> {
    return this.prisma.cat.findUnique({ where: { id: input.id } });
  }

  async findRelatedOwner(catId: string): Promise<Nullable<PrismaOwner>> {
    const relatedOwner = await this.prisma.cat
      .findUnique({
        where: { id: catId },
      })
      .owner();

    return relatedOwner;
  }
}
