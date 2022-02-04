import { IsEmail, IsEnum, IsMongoId, IsString } from 'class-validator';
import { InvitationType } from '../enums/invitation-type.enum';

export class CreateInvitationDto {
  @IsEmail()
  public email: string;

  @IsString()
  public token: string;

  @IsEnum(InvitationType)
  public entity: InvitationType;

  @IsMongoId()
  public entity_id: string;

  public payload: any;

  constructor(email: string, token: string, entity: InvitationType, entity_id: string, payload: any) {
    this.email = email;
    this.token = token;
    this.entity = entity;
    this.entity_id = entity_id;
    this.payload = payload;
  }
}
