import { IsNotEmpty, IsString } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class UserRoleDTO extends BaseDto implements StaticImplements<ApiMethods<UserRoleDTO>, typeof UserRoleDTO> {
  @IsString()
  public userId: string;

  @IsNotEmpty()
  public role: string;

  constructor(userId: string, role: string) {
    super();
    this.userId = userId;
    this.role = role;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): UserRoleDTO {
    return new UserRoleDTO('', '');
  }

  static examples(): { [key: string]: { value: UserRoleDTO } } {
    return {
      UserRoleDTO: {
        value: UserRoleDTO.createEmpty(),
      },
    };
  }
}
