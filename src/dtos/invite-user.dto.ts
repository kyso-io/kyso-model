import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class InviteUserDto {
  @IsEmail()
  public email!: string;

  @IsString()
  @IsNotEmpty()
  public organizationSlug!: string;
  
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public teamSlug!: string;
}