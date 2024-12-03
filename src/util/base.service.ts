import { Repository, ObjectLiteral, FindOneOptions } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

export class BaseService<T> {
  constructor(private repository: Repository<T>) {}

  async findOneOrFail(
    query: ObjectLiteral | FindOneOptions<T>,
    errorMessage?: string,
  ): Promise<T> {
    const result = await this.repository.findOne(query);
    if (!result)
      throw new NotFoundException(
        errorMessage ||
          `${this.repository.metadata.name || 'Entity'} not found`,
      );
    return result;
  }
}
