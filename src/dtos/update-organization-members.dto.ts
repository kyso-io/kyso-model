import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray, ValidateNested } from 'class-validator';
import { UserRoleDTO } from './user-role.dto';
import 'reflect-metadata';

export class UpdateOrganizationMembersDTO {
  @IsArray()
  @ArrayMinSize(1)
  // @ValidateNested({ each: true })
  // @Type(() => UserRole)
  public members: UserRoleDTO[];

  constructor(members: UserRoleDTO[]) {
    this.members = members;
  }
}
