import { IsEmail, IsEnum, IsMongoId } from 'class-validator';
import { InvitationStatus } from '../enums/invitation-status.enum';
import { InvitationType } from '../enums/invitation-type.enum';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class Invitation extends BaseModel implements StaticImplements<ApiMethods<Invitation>, typeof Invitation> {
  @IsMongoId()
  public creator_id: string;

  @IsEmail()
  public email: string;

  @IsEnum(InvitationType)
  public entity: InvitationType;

  @IsMongoId()
  public entity_id: string;

  public payload: any;

  @IsEnum(InvitationStatus)
  public status: InvitationStatus;

  constructor(creator_id: string, email: string, entity: InvitationType, entity_id: string, payload: any) {
    super();
    this.creator_id = creator_id;
    this.email = email;
    this.entity = entity;
    this.entity_id = entity_id;
    this.payload = payload;
    this.status = InvitationStatus.Pending;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): Invitation {
    return new Invitation('', '', InvitationType.Organization, '', {});
  }

  static examples(): { [key: string]: { value: Invitation } } {
    return {
      Invitation: {
        value: Invitation.createEmpty(),
      },
    };
  }
}
