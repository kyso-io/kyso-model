import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

import { IsBoolean, IsObject, IsString } from 'class-validator';

export class UpdateTeamRequest {
  @ApiModelProperty()
  @IsString()
  public location: string;

  @ApiModelProperty()
  @IsString()
  public link: string;

  @ApiModelProperty()
  @IsString()
  public bio: string;

  @ApiModelProperty()
  @IsString()
  public access_domain: string;

  @ApiModelProperty()
  @IsString()
  public email_access: string;

  @ApiModelProperty()
  @IsBoolean()
  public gmail_access_only: boolean;

  @ApiModelProperty()
  @IsObject()
  public company_tax_details: object;

  constructor(location: string, link: string, bio: string, access_domain: string, email_access: string, gmail_access_only: boolean, company_tax_details: object) {
    this.location = location;
    this.link = link;
    this.bio = bio;
    this.access_domain = access_domain;
    this.email_access = email_access;
    this.gmail_access_only = gmail_access_only;
    this.company_tax_details = company_tax_details;
  }
}
