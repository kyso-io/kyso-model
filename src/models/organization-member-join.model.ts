
export class OrganizationMemberJoin {
  public organization_id: string;

  public member_id: string;

  public role_names: string[];

  public active: boolean;

  public id: string | null;

  constructor(organization_id: string, member_id: string, role_names: string[], active: boolean, id?: string) {
    this.organization_id = organization_id;
    this.member_id = member_id;
    this.role_names = role_names;
    this.active = active;

    if (id) {
      this.id = id;
    } else {
      this.id = null;
    }
  }
}
