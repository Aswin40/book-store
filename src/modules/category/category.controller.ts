import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import CategoryService from './category.service';
import { Category } from './category.entity';

@Controller('/category')
export default class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  public async getCategories(): Promise<Category[]> {
    return this.categoryService.getAll();
  }

  @Post()
  public async createCategory(@Body('name') name: string): Promise<Category> {
    return this.categoryService.create(name);
  }

  @Delete(':id')
  public async deleteCategory(
    @Param('id') id: string,
  ): Promise<{ message: string }> {
    return this.categoryService.remove(+id);
  }

  @Put(':id')
  public async updateCategory(
    @Param('id') id: string,
    @Body('name') name: string,
  ) {
    return this.categoryService.update(+id, name);
  }
}
