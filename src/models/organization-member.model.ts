export class OrganizationMember {
  public id: string;

  public nickname: string;

  public username: string;

  public organization_roles: string[];

  public bio: string;

  public avatar_url: string;

  public email: string;

  constructor(id: string, nickname: string, username: string, organization_roles: string[], bio: string, avatar_url: string, email: string) {
    this.id = id;
    this.nickname = nickname;
    this.username = username;
    this.organization_roles = organization_roles;
    this.bio = bio;
    this.avatar_url = avatar_url;
    this.email = email;
  }
}
