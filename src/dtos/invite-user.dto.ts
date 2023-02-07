import { IsEmail, IsNotEmpty, IsOptional, IsString, ValidateIf } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class InviteUserDto extends BaseDto implements StaticImplements<ApiMethods<InviteUserDto>, typeof InviteUserDto> {
  @IsEmail()
  public email: string;

  @IsString()
  @IsNotEmpty()
  public organizationSlug: string;

  @IsString()
  @IsNotEmpty()
  public organizationRole: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public teamSlug?: string | null;

  @ValidateIf((inviteUserDto: InviteUserDto) => inviteUserDto.hasOwnProperty('teamSlug') && inviteUserDto.teamSlug != null && inviteUserDto.teamSlug.length > 0)
  @IsString()
  @IsNotEmpty()
  public teamRole?: string | null;

  constructor(email: string, organizationSlug: string, organizationRole: string, teamSlug?: string | null, teamRole?: string | null) {
    super();
    this.email = email;
    this.organizationSlug = organizationSlug;
    this.organizationRole = organizationRole;
    this.teamSlug = teamSlug;
    this.teamRole = teamRole;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): InviteUserDto {
    return new InviteUserDto('', '', '');
  }

  static examples(): { [key: string]: { value: InviteUserDto } } {
    return {
      InviteUserDto: {
        value: InviteUserDto.createEmpty(),
      },
    };
  }
}
