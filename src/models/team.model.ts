import { IsArray, IsBoolean, IsEnum, IsMongoId, IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';
import { TeamVisibilityEnum } from '../enums/team-visibility.enum';
import { BaseModel } from './base.model';
import { KysoRole } from './kyso-role.model';

export class Team extends BaseModel {
  @IsNotEmpty()
  public name: string;

  @IsOptional()
  @IsString()
  public avatar_url: string;

  @IsOptional()
  @IsString()
  public bio: string;

  @IsOptional()
  @IsString()
  public link: string;

  @IsOptional()
  @IsString()
  public location: string;

  @IsArray()
  // @ValidateNested({ each: true })
  // @Type(() => KysoRole)
  public roles: KysoRole[];

  @IsEnum(TeamVisibilityEnum)
  public visibility: TeamVisibilityEnum;

  @IsMongoId()
  public organization_id: string;

  @IsString()
  public access_domain: string;

  @IsString()
  public email_access: string;

  @IsBoolean()
  public gmail_access_only: boolean;

  @IsObject()
  public company_tax_details: object;

  constructor(
    name: string,
    avatar_url: string,
    bio: string,
    link: string,
    location: string,
    roles: KysoRole[],
    organization_id: string,
    visibility: TeamVisibilityEnum,
    access_domain: string,
    email_access: string,
    gmail_access_only: boolean,
    company_tax_details: object,
    id?: string
  ) {
    super();

    this.name = name;
    this.avatar_url = avatar_url;
    this.bio = bio;
    this.link = link;
    this.location = location;
    this.roles = roles;
    this.organization_id = organization_id;
    this.visibility = visibility;
    this.access_domain = access_domain;
    this.email_access = email_access;
    this.gmail_access_only = gmail_access_only;
    this.company_tax_details = company_tax_details;

    if (id) {
      this.id = id;
    }
  }
}
