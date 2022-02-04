import { InvitationType } from '../enums/invitation-type.enum';
import { BaseModel } from './base.model';

export class Invitation extends BaseModel {
  public email: string;
  public token: string;
  public entity: InvitationType;
  public entity_id: string;
  public payload: any;

  constructor(email: string, token: string, entity: InvitationType, entity_id: string, payload: any) {
    super();
    this.email = email;
    this.token = token;
    this.entity = entity;
    this.entity_id = entity_id;
    this.payload = payload;
  }
}
