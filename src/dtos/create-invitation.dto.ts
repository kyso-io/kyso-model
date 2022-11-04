import { IsEmail, IsEnum, IsMongoId } from 'class-validator';
import { InvitationType } from '../enums/invitation-type.enum';
import { ApiMethods } from '../interfaces/api-methods';
import { BaseModel } from '../models/base.model';
import { StaticImplements } from '../types/static-implements';

export class CreateInvitationDto extends BaseModel implements StaticImplements<ApiMethods<CreateInvitationDto>, typeof CreateInvitationDto> {
  @IsEmail()
  public email: string;

  @IsEnum(InvitationType)
  public entity: InvitationType;

  @IsMongoId()
  public entity_id: string;

  public payload: any;

  constructor(email: string, entity: InvitationType, entity_id: string, payload: any) {
    super();
    this.email = email;
    this.entity = entity;
    this.entity_id = entity_id;
    this.payload = payload;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): CreateInvitationDto {
    return new CreateInvitationDto('', InvitationType.Organization, '', {});
  }

  static examples(): { [key: string]: { value: CreateInvitationDto } } {
    return {
      CreateInvitationDto: {
        value: CreateInvitationDto.createEmpty(),
      },
    };
  }
}
