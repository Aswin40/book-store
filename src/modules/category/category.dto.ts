import { IsDefined, IsNotEmpty } from 'class-validator';

export class CategoryDto {
  @IsDefined()
  @IsNotEmpty()
  name: string;
}
