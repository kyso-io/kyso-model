import { IsEmail, IsEnum, IsMongoId, IsString } from 'class-validator';
import { InvitationStatus } from '../enums/invitation-status.enum';
import { InvitationType } from '../enums/invitation-type.enum';
import { BaseModel } from './base.model';

export class Invitation extends BaseModel {
  @IsEmail()
  public email: string;

  @IsEnum(InvitationType)
  public entity: InvitationType;

  @IsMongoId()
  public entity_id: string;

  public payload: any;

  @IsEnum(InvitationStatus)
  public status: InvitationStatus;

  constructor(email: string, entity: InvitationType, entity_id: string, payload: any) {
    super();
    this.email = email;
    this.entity = entity;
    this.entity_id = entity_id;
    this.payload = payload;
    this.status = InvitationStatus.Pending;
  }
}
