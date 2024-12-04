import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import Author from '../author/author.entity';
import { Category } from '../category/category.entity';
import Publisher from '../publisher/publisher.entity';

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

  @ManyToOne(() => Publisher, (publisher) => publisher.books)
  public publisher: Publisher;

  @ManyToMany(() => Category, { cascade: true })
  @JoinTable()
  categories: Category[];
}
