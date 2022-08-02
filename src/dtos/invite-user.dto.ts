import { IsEmail, IsNotEmpty, IsOptional, IsString, ValidateIf } from 'class-validator';

export class InviteUserDto {
  @IsEmail()
  public email!: string;

  @IsString()
  @IsNotEmpty()
  public organizationSlug!: string;

  @IsString()
  @IsNotEmpty()
  public organizationRole!: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public teamSlug?: string | null;

  @ValidateIf((inviteUserDto: InviteUserDto) => inviteUserDto.hasOwnProperty('teamSlug') && inviteUserDto.teamSlug != null && inviteUserDto.teamSlug.length > 0)
  @IsString()
  @IsNotEmpty()
  public teamRole?: string | null;
}
