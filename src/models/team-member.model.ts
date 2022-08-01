import { TeamMembershipOriginEnum } from "../enums/team-membership-origin.enum";
import slug from "../helpers/slugify";

export class TeamMember {
  public id: string;

  public nickname: string;

  public username: string;

  public team_roles: string[];

  public bio: string;

  public avatar_url: string;

  public email: string;

  public nameSlug: string;

  public membership_origin: TeamMembershipOriginEnum;

  constructor(id: string, nickname: string, username: string, team_roles: string[], bio: string, avatar_url: string, email: string, membership_origin: TeamMembershipOriginEnum) {
    this.id = id;
    this.nickname = nickname;
    this.username = username;
    this.nameSlug = slug(this.nickname);
    this.team_roles = team_roles;
    this.bio = bio;
    this.avatar_url = avatar_url;
    this.email = email;
    this.membership_origin = membership_origin;
  }
}
