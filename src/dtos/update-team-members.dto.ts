import { ArrayMinSize, IsArray } from 'class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { BaseModel } from '../models/base.model';
import { StaticImplements } from '../types/static-implements';
import { UserRoleDTO } from './user-role.dto';

export class UpdateTeamMembersDTO extends BaseModel implements StaticImplements<ApiMethods<UpdateTeamMembersDTO>, typeof UpdateTeamMembersDTO> {
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
