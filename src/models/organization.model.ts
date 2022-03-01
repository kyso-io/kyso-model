import { IsArray, IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { randomUUID } from 'crypto';
import slugify from '../helpers/slugify';
import { BaseModel } from './base.model';
import { KysoRole } from './kyso-role.model';
import { OrganizationOptions } from './organization-options.model';

export class Organization extends BaseModel {
  @IsNotEmpty()
  // @Matches('(?=\S*[-])([a-zA-Z-]+)')  // name-name-name NOT SURE
  public sluglified_name: string;

  @IsNotEmpty()
  @IsString()
  public display_name: string;

  @IsNotEmpty()
  public legal_name: string;

  @IsArray()
  // @ValidateNested({ each: true })
  // @Type(() => KysoRole)
  public roles: KysoRole[];

  @IsArray()
  /**
   * means the list of access domain a company set so only the users with that access domain can access to kyso.
   * like [yahoo.com, kyso.io]
   *
   * If empty, allowed all domains
   */
  public allowed_access_domains: string[];

  @IsEmail()
  @IsNotEmpty()
  public billingEmail: string;

  @IsString()
  public stripe_subscription_id: string;

  @IsString()
  public tax_identifier: string;

  @IsBoolean()
  public allowGoogleLogin: boolean;

  @IsOptional()
  public location: string;

  @IsOptional()
  public link: string;

  @IsOptional()
  public bio: string;

  @IsOptional()
  public avatar_url: string;
  
  @IsOptional()
  public options: OrganizationOptions;

  constructor(
    display_name: string,
    legal_name: string,
    roles: KysoRole[],
    allowed_access_domains: string[],
    billingEmail: string,
    stripe_subscription_id: string,
    tax_identifier: string,
    allowGoogleLogin: boolean,
    location: string,
    link: string,
    bio: string,
    avatar_url: string,
    id?: string,
    sluglified_name?: string,
    options?: OrganizationOptions
  ) {
    super();

    this.display_name = display_name;

    if (sluglified_name) {
      this.sluglified_name = sluglified_name;
    } else {
      if (display_name) {
        this.sluglified_name = slugify(display_name);
      } else {
        this.sluglified_name = randomUUID();
      }
    }

    this.legal_name = legal_name;
    this.roles = roles;
    this.allowed_access_domains = allowed_access_domains;
    this.billingEmail = billingEmail;
    this.stripe_subscription_id = stripe_subscription_id;
    this.allowGoogleLogin = allowGoogleLogin;
    this.tax_identifier = tax_identifier;
    this.location = location;
    this.link = link;
    this.bio = bio;
    this.avatar_url = avatar_url;

    if (options) {
      this.options = options;
    } else {
      this.options = {};
    }

    if (id) {
      this.id = id;
    }
  }
}
