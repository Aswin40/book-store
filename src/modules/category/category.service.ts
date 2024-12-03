import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export default class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  public async getCategories(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }

  public async createCategory(name: string): Promise<Category> {
    return await this.categoryRepository.save({ name });
  }

  public async updateCategory(id: number, name: string): Promise<Category> {
    const category = await this.categoryRepository.findOneByOrFail({ id });
    category.name = name;
    return await this.categoryRepository.save(category);
  }

  public async deleteCategory(id: number): Promise<{ message: string }> {
    const category = await this.categoryRepository.findOneByOrFail({ id });
    await this.categoryRepository.remove(category);
    return {
      message: 'Category deleted successfully',
    };
  }
}
