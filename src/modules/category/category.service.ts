import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { BaseService } from 'src/util/base.service';

@Injectable()
export default class CategoryService extends BaseService<Category> {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {
    super(categoryRepository);
  }

  public async getCategories(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }

  public async createCategory(name: string): Promise<Category> {
    return await this.categoryRepository.save({ name });
  }

  public async updateCategory(id: number, name: string): Promise<Category> {
    const category = await this.findOneOrFail({ where: { id } });
    category.name = name;
    return await this.categoryRepository.save(category);
  }

  public async deleteCategory(id: number): Promise<{ message: string }> {
    const category = await this.findOneOrFail({
      where: { id },
    });
    await this.categoryRepository.remove(category);
    return {
      message: 'Category deleted successfully',
    };
  }
}
