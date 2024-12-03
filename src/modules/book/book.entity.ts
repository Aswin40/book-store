import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
} from 'typeorm';
import Author from '../author/author.entity';
import { Category } from '../category/category.entity';

@Entity()
export default class Book {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public price: string;

  @ManyToOne(() => Author, (author) => author.books)
  public author: Author;

  @ManyToMany(() => Category, { cascade: true })
  categories: Category[];
}
