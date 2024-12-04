import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import Book from '../book/book.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @ManyToMany(() => Book, (book) => book.categories)
  books: Book[];
}
