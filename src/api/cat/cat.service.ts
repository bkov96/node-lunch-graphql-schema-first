import { Injectable } from '@nestjs/common';
import { Cat as PrismaCat } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateCatInput } from './inputs/create-cat.input';

@Injectable()
export class CatService {
  constructor(private prisma: PrismaService) {}

  createCat(input: CreateCatInput): Promise<PrismaCat> {
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

  createStrayCat(input: Omit<CreateCatInput, 'ownerId'>): Promise<PrismaCat> {
    return this.prisma.cat.create({
      data: {
        name: input.name,
        age: input.age,
      },
    });
  }
}
