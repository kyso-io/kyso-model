import { ArrayMinSize, IsArray } from 'class-validator';
import 'reflect-metadata';
import { ApiMethods } from '../interfaces/api-methods';
import { BaseModel } from '../models/base.model';
import { StaticImplements } from '../types/static-implements';
import { UserRoleDTO } from './user-role.dto';

export class UpdateOrganizationMembersDTO extends BaseModel implements StaticImplements<ApiMethods<UpdateOrganizationMembersDTO>, typeof UpdateOrganizationMembersDTO> {
  @IsArray()
  @ArrayMinSize(1)
  // @ValidateNested({ each: true })
  // @Type(() => UserRole)
  public members: UserRoleDTO[];

  constructor(members: UserRoleDTO[]) {
    super();
    this.members = members;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): UpdateOrganizationMembersDTO {
    return new UpdateOrganizationMembersDTO([]);
  }

  static examples(): { [key: string]: { value: UpdateOrganizationMembersDTO } } {
    return {
      UpdateOrganizationMembersDTO: {
        value: UpdateOrganizationMembersDTO.createEmpty(),
      },
    };
  }
}
