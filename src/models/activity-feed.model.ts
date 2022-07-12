import { ActionEnum } from '../enums/action.enum';
import { EntityEnum } from '../enums/entity.enum';

export class ActivityFeed {
  public id: string | null;
  public created_at: Date | null;
  public user_id: string | null;
  public organization: string | null;
  public team: string | null;
  public entity: EntityEnum | null;
  public entity_id: string | null;
  public action: ActionEnum | null;

  constructor() {
    this.id = null;
    this.created_at = null;
    this.user_id = null;
    this.organization = null;
    this.team = null;
    this.entity = null;
    this.entity_id = null;
    this.action = null;
  }
}
