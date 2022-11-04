import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class OrganizationMemberJoin extends BaseModel implements StaticImplements<ApiMethods<OrganizationMemberJoin>, typeof OrganizationMemberJoin> {
  public organization_id: string;

  public member_id: string;

  public role_names: string[];

  public active: boolean;

  constructor(organization_id: string, member_id: string, role_names: string[], active: boolean, id?: string) {
    super(id);
    this.organization_id = organization_id;
    this.member_id = member_id;
    this.role_names = role_names;
    this.active = active;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): OrganizationMemberJoin {
    return new OrganizationMemberJoin('', '', [], false);
  }

  static examples(): { [key: string]: { value: OrganizationMemberJoin } } {
    return {
      OrganizationMemberJoin: {
        value: OrganizationMemberJoin.createEmpty(),
      },
    };
  }
}
