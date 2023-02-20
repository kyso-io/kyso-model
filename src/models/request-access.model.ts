import { RequestAccessStatusEnum } from '../enums/request-access-status.enum';
import { TeamVisibilityEnum } from '../enums/team-visibility.enum';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class RequestAccess extends BaseModel implements StaticImplements<ApiMethods<RequestAccess>, typeof RequestAccess> {
  public requester_user_id: string;

  public organization_id: string | null;

  public channel_id: string | null;

  public status: RequestAccessStatusEnum;

  public resolved_at: Date | null;

  public resolved_by: string | null;

  public team_visibility?: TeamVisibilityEnum;

  constructor(requester_user_id: string, organization_id: string | null, channel_id: string | null, status: RequestAccessStatusEnum, resolved_at: Date | null, resolved_by: string | null) {
    super();
    this.requester_user_id = requester_user_id;
    this.organization_id = organization_id;
    this.channel_id = channel_id;
    this.status = status;
    this.resolved_at = resolved_at;
    this.resolved_by = resolved_by;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): RequestAccess {
    return new RequestAccess('', null, null, RequestAccessStatusEnum.PENDING, null, null);
  }

  static examples(): { [key: string]: { value: RequestAccess } } {
    return {
      ResourcePermissions: {
        value: RequestAccess.createEmpty(),
      },
    };
  }
}
