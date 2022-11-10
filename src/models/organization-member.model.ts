import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class OrganizationMember extends BaseModel implements StaticImplements<ApiMethods<OrganizationMember>, typeof OrganizationMember> {
  public nickname: string;

  public username: string;

  public organization_roles: string[];

  public bio: string;

  public avatar_url: string;

  public email: string;

  constructor(id: string, nickname: string, username: string, organization_roles: string[], bio: string, avatar_url: string, email: string) {
    super(id);
    this.nickname = nickname;
    this.username = username;
    this.organization_roles = organization_roles;
    this.bio = bio;
    this.avatar_url = avatar_url;
    this.email = email;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): OrganizationMember {
    return new OrganizationMember('', '', '', [], '', '', '');
  }

  static examples(): { [key: string]: { value: OrganizationMember } } {
    return {
      OrganizationMember: {
        value: OrganizationMember.createEmpty(),
      },
    };
  }
}
