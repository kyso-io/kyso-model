import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray, ValidateNested } from 'class-validator';
import { UserRole } from './user-role.dto';

export class UpdateOrganizationMembers {
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => UserRole)
  public members: UserRole[];

  constructor(members: UserRole[]) {
    this.members = members;
  }
}
