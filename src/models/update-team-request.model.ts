
import { IsBoolean, IsObject, IsString } from 'class-validator';

export class UpdateTeamRequest {
  
  @IsString()
  public location: string;

  
  @IsString()
  public link: string;

  
  @IsString()
  public bio: string;
  
  
  @IsString()
  public access_domain: string;
  
  
  @IsString()
  public email_access: string;
  
  
  @IsBoolean()
  public gmail_access_only: boolean;

  
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
