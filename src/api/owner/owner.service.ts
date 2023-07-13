import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Owner as PrismaOwner } from '@prisma/client';
import { ICreateOwnerInput, IFindOwnerInput } from 'src/graphql.schema';

@Injectable()
export class OwnerService {
  constructor(private prisma: PrismaService) {}

  createOwner(createOwnerInput: ICreateOwnerInput): Promise<PrismaOwner> {
    return this.prisma.owner.create({
      data: {
        firstName: createOwnerInput.firstName,
        lastName: createOwnerInput.lastName,
      },
    });
  }

  findOwner(findOwnerInput: IFindOwnerInput): Promise<Nullable<PrismaOwner>> {
    return this.prisma.owner.findUnique({ where: { id: findOwnerInput.id } });
  }
}
