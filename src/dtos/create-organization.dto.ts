import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateOrganizationDto {
  @IsNotEmpty()
  @IsString()
  public display_name!: string;

  @IsEmail()
  @IsNotEmpty()
  public billing_email!: string;
}