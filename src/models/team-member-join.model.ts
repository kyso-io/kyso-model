import { IsBoolean, IsMongoId, IsString } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class TeamMemberJoin extends BaseModel implements StaticImplements<ApiMethods<TeamMemberJoin>, typeof TeamMemberJoin> {
  @IsMongoId()
  public team_id: string;

  @IsMongoId()
  public member_id: string;

  @IsString({ each: true })
  public role_names: string[];

  @IsBoolean()
  public active: boolean;

  constructor(team_id: string, member_id: string, role_names: string[], active: boolean, id?: string) {
    super(id);
    this.team_id = team_id;
    this.member_id = member_id;
    this.role_names = role_names;
    this.active = active;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): TeamMemberJoin {
    return new TeamMemberJoin('', '', [], false);
  }

  static examples(): { [key: string]: { value: TeamMemberJoin } } {
    return {
      TeamMemberJoin: {
        value: TeamMemberJoin.createEmpty(),
      },
    };
  }
}
