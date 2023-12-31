import { IsNotEmpty, IsOptional, IsString } from '@nestjs/class-validator';
import { CommentPermissionsEnum } from '../enums/comment-permissions.enum';
import { KysoPermissions } from '../enums/general-permissions.enum';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class CheckPermissionDto extends BaseDto implements StaticImplements<ApiMethods<CheckPermissionDto>, typeof CheckPermissionDto> {
  @IsString()
  @IsNotEmpty()
  public organization: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public team: string;

  @IsString()
  @IsNotEmpty()
  public permission: KysoPermissions;

  constructor(organization: string, team: string, permission: KysoPermissions) {
    super();
    this.organization = organization;
    this.team = team;
    this.permission = permission;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): CheckPermissionDto {
    return new CheckPermissionDto('', '', CommentPermissionsEnum.CREATE);
  }

  static examples(): { [key: string]: { value: CheckPermissionDto } } {
    return {
      CheckPermissionDto: {
        value: CheckPermissionDto.createEmpty(),
      },
    };
  }
}
