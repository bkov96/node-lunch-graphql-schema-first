import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateOwnerInput } from './inputs/create-owner.input';
import { Owner as PrismaOwner } from '@prisma/client';

@Injectable()
export class OwnerService {
  constructor(private prisma: PrismaService) {}

  createOwner(createOwnerInput: CreateOwnerInput): Promise<PrismaOwner> {
    return this.prisma.owner.create({
      data: {
        firstName: createOwnerInput.firstName,
        lastName: createOwnerInput.lastName,
      },
    });
  }
}
