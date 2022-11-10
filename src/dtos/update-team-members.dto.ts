import { ArrayMinSize, IsArray } from 'class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';
import { UserRoleDTO } from './user-role.dto';

export class UpdateTeamMembersDTO extends BaseDto implements StaticImplements<ApiMethods<UpdateTeamMembersDTO>, typeof UpdateTeamMembersDTO> {
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

  static createEmpty(): UpdateTeamMembersDTO {
    return new UpdateTeamMembersDTO([]);
  }

  static examples(): { [key: string]: { value: UpdateTeamMembersDTO } } {
    return {
      UpdateTeamMembersDTO: {
        value: UpdateTeamMembersDTO.createEmpty(),
      },
    };
  }
}
