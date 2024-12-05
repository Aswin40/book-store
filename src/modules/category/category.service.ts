import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { BaseService } from 'src/util/base.service';
import { CategoryDto } from './category.dto';

@Injectable()
export default class CategoryService extends BaseService<Category> {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {
    super(categoryRepository);
  }

  async getAll(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }

  async getById(id: number): Promise<Category> {
    return await this.findOneOrFail({ where: { id } });
  }

  async create({ name }: CategoryDto): Promise<Category> {
    return await this.categoryRepository.save({ name });
  }

  async update(id: number, { name }: CategoryDto): Promise<Category> {
    const category = await this.findOneOrFail({ where: { id } });
    category.name = name;
    return await this.categoryRepository.save(category);
  }

  async remove(id: number): Promise<{ message: string }> {
    const category = await this.findOneOrFail({
      where: { id },
    });
    await this.categoryRepository.remove(category);
    return {
      message: 'Category deleted successfully',
    };
  }
}
