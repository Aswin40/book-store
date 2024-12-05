import { IsEmail, IsString } from 'class-validator';

export default class UpdatePublisherDto {
  @IsString()
  public name?: string;

  @IsEmail()
  public email?: string;
}
