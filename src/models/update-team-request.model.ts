import { IsBoolean, IsEnum, IsObject, IsOptional, IsString } from 'class-validator';
import { AllowDownload } from '../enums/allow-download.enum';
import { TeamVisibilityEnum } from '../enums/team-visibility.enum';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class UpdateTeamRequest extends BaseModel implements StaticImplements<ApiMethods<UpdateTeamRequest>, typeof UpdateTeamRequest> {
  @IsOptional()
  @IsString()
  public display_name: string;

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

  @IsEnum(AllowDownload)
  public allow_download: AllowDownload;

  constructor(
    display_name: string,
    location: string,
    link: string,
    bio: string,
    access_domain: string,
    email_access: string,
    gmail_access_only: boolean,
    company_tax_details: object,
    visibility: TeamVisibilityEnum,
    allow_download: AllowDownload,
  ) {
    super();
    this.display_name = display_name;
    this.location = location;
    this.link = link;
    this.bio = bio;
    this.access_domain = access_domain;
    this.email_access = email_access;
    this.gmail_access_only = gmail_access_only;
    this.company_tax_details = company_tax_details;
    this.visibility = visibility;
    this.allow_download = allow_download;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): UpdateTeamRequest {
    return new UpdateTeamRequest('', '', '', '', '', '', false, {}, TeamVisibilityEnum.PRIVATE, AllowDownload.ALL);
  }

  static examples(): { [key: string]: { value: UpdateTeamRequest } } {
    return {
      UpdateTeamRequest: {
        value: UpdateTeamRequest.createEmpty(),
      },
    };
  }
}
