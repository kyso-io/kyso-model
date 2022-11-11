import { ActionEnum } from '../enums/action.enum';
import { EntityEnum } from '../enums/entity.enum';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class ActivityFeed extends BaseModel implements StaticImplements<ApiMethods<ActivityFeed>, typeof ActivityFeed> {
  public user_id: string | null;
  public organization: string | null;
  public team: string | null;
  public entity: EntityEnum | null;
  public entity_id: string | null;
  public action: ActionEnum | null;
  public always_show: boolean;
  public user_ids: string[];

  constructor(
    user_id: string | null,
    organization: string | null,
    team: string | null,
    entity: EntityEnum | null,
    entity_id: string | null,
    action: ActionEnum | null,
    always_show: boolean,
    user_ids: string[],
  ) {
    super(null, null);
    this.user_id = user_id;
    this.organization = organization;
    this.team = team;
    this.entity = entity;
    this.entity_id = entity_id;
    this.action = action;
    this.always_show = always_show;
    this.user_ids = user_ids;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): ActivityFeed {
    return new ActivityFeed('', '', '', null, '', null, false, []);
  }

  static examples(): { [key: string]: { value: ActivityFeed } } {
    return {
      ActivityFeed: {
        value: ActivityFeed.createEmpty(),
      },
    };
  }
}
