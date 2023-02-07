import { ArrayMinSize, IsArray } from '@nestjs/class-validator';
import 'reflect-metadata';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';
import { UserRoleDTO } from './user-role.dto';

export class UpdateOrganizationMembersDTO extends BaseDto implements StaticImplements<ApiMethods<UpdateOrganizationMembersDTO>, typeof UpdateOrganizationMembersDTO> {
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
