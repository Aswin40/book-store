import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import AuthorModule from './modules/author/author.module';
import BookModule from './modules/book/book.module';
import CategoryModule from './modules/category/category.module';
import PublisherModule from './modules/publisher/publisher.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    AuthorModule,
    BookModule,
    CategoryModule,
    PublisherModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
