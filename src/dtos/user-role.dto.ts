import { IsNotEmpty, IsString } from 'class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { BaseModel } from '../models/base.model';
import { StaticImplements } from '../types/static-implements';

export class UserRoleDTO extends BaseModel implements StaticImplements<ApiMethods<UserRoleDTO>, typeof UserRoleDTO> {
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
