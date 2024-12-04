import { IsEmail, IsString } from 'class-validator';

export default class UpdateAuthorDto {
  @IsString()
  public name?: string;

  @IsEmail()
  public email?: string;
}
