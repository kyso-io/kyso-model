import { IsAlphanumeric, IsEmail, IsNotEmpty } from 'class-validator';

export class SignUpDto {
  @IsEmail()
  public email!: string;

  @IsNotEmpty()
  public username!: string;

  @IsNotEmpty()
  public display_name!: string;

  @IsAlphanumeric()
  public password!: string;
}
