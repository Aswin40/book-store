import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/util/base.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import Book from './book.entity';
import CreateBookDto from './createBook.dto';
import { AuthorService } from '../author/author.service';
import PublisherService from '../publisher/publisher.service';
import CategoryService from '../category/category.service';
import { UpdateBookDto } from './updateBook.dto';

@Injectable()
export default class BookService extends BaseService<Book> {
  constructor(
    @InjectRepository(Book) private bookRespository: Repository<Book>,
    private authorService: AuthorService,
    private publisherService: PublisherService,
    private categoryService: CategoryService,
  ) {
    super(bookRespository);
  }

  async getAll(): Promise<Book[]> {
    return this.bookRespository.find();
  }

  async create(data: CreateBookDto): Promise<Book> {
    const author = await this.authorService.getById(data.authorId);
    const publisher = await this.publisherService.getById(data.pulisherId);
    const category = await this.categoryService.getById(data.categoryId);

    const newBook = {
      name: data.name,
      price: data.price,
      category,
      author,
      publisher,
    };

    return this.bookRespository.save(newBook);
  }

  async update(data: UpdateBookDto): Promise<Book> {
    const book = await this.findOneOrFail({ where: { id: data.id } });
    if (data.price) {
      book.price = data.price;
    }
    if (data.name) {
      book.name = data.name;
    }
    return this.bookRespository.save(book);
  }

  async remove(id: number): Promise<{ message: string }> {
    const book = await this.findOneOrFail({ where: { id } });
    await this.bookRespository.remove(book);

    return { message: 'Book deleted successfully' };
  }
}
