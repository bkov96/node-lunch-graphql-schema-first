import { Resolver, Query } from '@nestjs/graphql';
import { IQuery } from './graphql.schema';

@Resolver('Root')
export class AppResolver implements Partial<IQuery> {
  @Query('testConnection')
  testConnection(): string {
    return 'Connection is estabilished';
  }
}
