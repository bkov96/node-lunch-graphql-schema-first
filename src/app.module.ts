import { Module } from '@nestjs/common';
import { PrismaModule } from './common/prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';
import { CatModule } from './api/cat/cat.module';
import { OwnerModule } from './api/owner/owner.module';

@Module({
  imports: [
    PrismaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      typePaths: ['./**/*.graphql'],
    }),
    CatModule,
    OwnerModule,
  ],
  providers: [AppResolver],
})
export class AppModule {}
