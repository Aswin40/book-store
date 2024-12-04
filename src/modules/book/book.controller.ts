import { Controller, Post, Body } from '@nestjs/common';
import BookService from './book.service';
import CreateBookDto from './createBook.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    return await this.bookService.create(createBookDto);
  }
}
