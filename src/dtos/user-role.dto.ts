import { IsNotEmpty, IsString } from 'class-validator';

export class UserRole {
  @IsString()
  public username: string;

  @IsNotEmpty()
  public role: string;

  constructor(username: string, role: string) {
    this.username = username;
    this.role = role;
  }
}
