import { IsDefined, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export default class CreateBookDto {
  @IsNotEmpty()
  @IsDefined()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsDefined()
  @IsString()
  public price: string;

  @IsNotEmpty()
  @IsDefined()
  @IsNumber()
  authorId: number;

  @IsNotEmpty()
  @IsDefined()
  @IsNumber()
  categoryId: number;

  @IsNotEmpty()
  @IsDefined()
  @IsNumber()
  pulisherId: number;
}
