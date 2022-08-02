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
  public teamSlug!: string;

  @ValidateIf((inviteUserDto: InviteUserDto) => inviteUserDto.teamSlug !== null && inviteUserDto.teamRole.length > 0)
  @IsString()
  @IsNotEmpty()
  public teamRole!: string;
}
