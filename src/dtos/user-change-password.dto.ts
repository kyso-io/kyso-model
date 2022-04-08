import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class UserChangePasswordDTO {
  @IsEmail()
  public email: string;

  @IsUUID()
  public token: string;

  @IsString()
  @IsNotEmpty()
  public password: string;

  constructor(email: string, token: string, password: string) {
    this.email = email;
    this.token = token;
    this.password = password;
  }
}
