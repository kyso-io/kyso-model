import { IsOptional } from '@nestjs/class-validator';
import { BaseDto } from './base.dto';
import { OrganizationNotificationsDTO } from './organization-notifications.dto';

export class OrganizationOptionsDTO extends BaseDto {
  @IsOptional()
  // @ValidateNested()
  // @Type(() => OrganizationAuthOptions)
  public notifications?: OrganizationNotificationsDTO;

  constructor() {
    super();
    this.notifications = new OrganizationNotificationsDTO(false, [], null, null, null);
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): OrganizationOptionsDTO {
    return new OrganizationOptionsDTO();
  }

  static examples(): { [key: string]: { value: OrganizationOptionsDTO } } {
    return {
      OrganizationOptions: {
        value: OrganizationOptionsDTO.createEmpty(),
      },
    };
  }
}
