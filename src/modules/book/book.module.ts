import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Book from './book.entity';
import BookService from './book.service';
import { BookController } from './book.controller';
import AuthorModule from '../author/author.module';
import PublisherModule from '../publisher/publisher.module';
import CategoryModule from '../category/category.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Book]),
    AuthorModule,
    PublisherModule,
    CategoryModule,
  ],
  controllers: [BookController],
  providers: [BookService],
})
export default class BookModule {}
