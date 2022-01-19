import { ArrayMinSize, IsArray } from 'class-validator';
import { UserRole } from './user-role.dto';

export class UpdateTeamMembers {
  @IsArray()
  @ArrayMinSize(1)
  // @ValidateNested({ each: true })
  // @Type(() => UserRole)
  public members: UserRole[];

  constructor(members: UserRole[]) {
    this.members = members;
  }
}
