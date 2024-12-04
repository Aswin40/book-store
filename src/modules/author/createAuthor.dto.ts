import { IsArray, IsDefined, IsEmail, IsString } from 'class-validator';
import Book from '../book/book.entity';

export default class CreateAuthorDto {
  @IsDefined()
  @IsString()
  public name: string;

  @IsDefined()
  @IsEmail()
  public email: string;

  @IsArray()
  public books: Book[];
}
