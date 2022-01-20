
export class TeamMemberJoin {
  public team_id: string;

  public member_id: string;

  public role_names: string[];

  public active: boolean;

  public id: string | null;

  constructor(team_id: string, member_id: string, role_names: string[], active: boolean, id?: string) {
    this.team_id = team_id;
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
