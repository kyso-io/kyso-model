import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class Invite extends BaseModel implements StaticImplements<ApiMethods<Invite>, typeof Invite> {
  public code: string;
  public team_id: string;
  public email: string;
  public role: string;
  public accepted: boolean;

  constructor(id: string, code: string, team_id: string, email: string, role: string, accepted: boolean) {
    super();
    this.id = id;
    this.code = code;
    this.team_id = team_id;
    this.email = email;
    this.role = role;
    this.accepted = accepted;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): Invite {
    return new Invite('', '', '', '', '', false);
  }

  static examples(): { [key: string]: { value: Invite } } {
    return {
      Invite: {
        value: Invite.createEmpty(),
      },
    };
  }
}
