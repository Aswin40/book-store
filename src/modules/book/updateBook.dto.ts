import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class UpdateBookDto {
  @IsNotEmpty()
  @IsDefined()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsDefined()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsDefined()
  @IsString()
  price: string;
}
