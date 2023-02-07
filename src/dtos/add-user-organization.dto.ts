import { IsMongoId, IsNotEmpty, IsString } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class AddUserOrganizationDto extends BaseDto implements StaticImplements<ApiMethods<AddUserOrganizationDto>, typeof AddUserOrganizationDto> {
  @IsMongoId()
  public organizationId: string;

  @IsMongoId()
  public userId: string;

  @IsNotEmpty()
  @IsString()
  public role: string;

  constructor(organizationId: string, userId: string, role: string) {
    super();
    this.organizationId = organizationId;
    this.userId = userId;
    this.role = role;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): AddUserOrganizationDto {
    return new AddUserOrganizationDto('', '', '');
  }

  static examples(): { [key: string]: { value: AddUserOrganizationDto } } {
    return {
      AddUserOrganizationDto: {
        value: AddUserOrganizationDto.createEmpty(),
      },
    };
  }
}
