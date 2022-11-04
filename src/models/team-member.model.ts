import { IsEnum, IsString } from 'class-validator';
import { TeamMembershipOriginEnum } from '../enums/team-membership-origin.enum';
import slug from '../helpers/slugify';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class TeamMember extends BaseModel implements StaticImplements<ApiMethods<TeamMember>, typeof TeamMember> {
  @IsString()
  public nickname: string;

  @IsString()
  public username: string;

  @IsString({ each: true })
  public team_roles: string[];

  @IsString()
  public bio: string;

  @IsString()
  public avatar_url: string;

  @IsString()
  public email: string;

  @IsString()
  public nameSlug: string;

  @IsEnum(TeamMembershipOriginEnum)
  public membership_origin: TeamMembershipOriginEnum;

  constructor(id: string, nickname: string, username: string, team_roles: string[], bio: string, avatar_url: string, email: string, membership_origin: TeamMembershipOriginEnum) {
    super(id);
    this.nickname = nickname;
    this.username = username;
    this.nameSlug = slug(this.nickname);
    this.team_roles = team_roles;
    this.bio = bio;
    this.avatar_url = avatar_url;
    this.email = email;
    this.membership_origin = membership_origin;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): TeamMember {
    return new TeamMember('', '', '', [], '', '', '', TeamMembershipOriginEnum.ORGANIZATION);
  }

  static examples(): { [key: string]: { value: TeamMember } } {
    return {
      TeamMember: {
        value: TeamMember.createEmpty(),
      },
    };
  }
}
