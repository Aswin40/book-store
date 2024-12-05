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
import { CategoryDto } from './category.dto';

@Controller('/category')
export default class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  public async getCategories(): Promise<Category[]> {
    return this.categoryService.getAll();
  }

  @Post()
  public async createCategory(
    @Body() category: CategoryDto,
  ): Promise<Category> {
    return this.categoryService.create(category);
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
    @Body() category: CategoryDto,
  ) {
    return this.categoryService.update(+id, category);
  }
}
