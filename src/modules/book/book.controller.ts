import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import BookService from './book.service';
import CreateBookDto from './createBook.dto';
import { UpdateBookDto } from './updateBook.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    return await this.bookService.create(createBookDto);
  }

  @Get()
  async getAll() {
    return await this.bookService.getAll();
  }

  @Put()
  async update(@Body() data: UpdateBookDto) {
    return await this.bookService.update(data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.bookService.remove(+id);
  }
}
