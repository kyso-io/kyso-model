import { ArrayMinSize, IsArray } from 'class-validator';
import { UserRoleDTO } from './user-role.dto';

export class UpdateTeamMembersDTO {
  @IsArray()
  @ArrayMinSize(1)
  // @ValidateNested({ each: true })
  // @Type(() => UserRole)
  public members: UserRoleDTO[];

  constructor(members: UserRoleDTO[]) {
    this.members = members;
  }
}
