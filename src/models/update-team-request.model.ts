import { IsBoolean, IsEnum, IsObject, IsOptional, IsString } from 'class-validator';
import { TeamVisibilityEnum } from '..';

export class UpdateTeamRequest {
  @IsOptional()
  @IsString()
  public location: string;

  @IsOptional()
  @IsString()
  public link: string;

  @IsOptional()
  @IsString()
  public bio: string;

  @IsOptional()
  @IsString()
  public access_domain: string;

  @IsOptional()
  @IsString()
  public email_access: string;

  @IsOptional()
  @IsBoolean()
  public gmail_access_only: boolean;

  @IsOptional()
  @IsObject()
  public company_tax_details: object;
  
  
  @IsOptional()
  @IsEnum(TeamVisibilityEnum)
  public visibility: TeamVisibilityEnum;

  constructor(location: string, link: string, bio: string, access_domain: string, email_access: string, gmail_access_only: boolean, company_tax_details: object, visibility: TeamVisibilityEnum) {
    this.location = location;
    this.link = link;
    this.bio = bio;
    this.access_domain = access_domain;
    this.email_access = email_access;
    this.gmail_access_only = gmail_access_only;
    this.company_tax_details = company_tax_details;
    this.visibility = visibility;
  }
}
