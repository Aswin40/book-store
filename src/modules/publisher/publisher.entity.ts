import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Book from '../book/book.entity';

@Entity()
export default class Publisher {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public email: string;

  @OneToMany(() => Book, (book) => book.author)
  public books: Book[];
}
