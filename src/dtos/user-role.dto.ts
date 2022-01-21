import { IsNotEmpty, IsString } from 'class-validator';

export class UserRoleDTO {
  @IsString()
  public userId: string;

  @IsNotEmpty()
  public role: string;

  constructor(userId: string, role: string) {
    this.userId = userId;
    this.role = role;
  }
}
