import { IsArray, IsBoolean, IsEmail, IsEnum, IsMongoId, IsNotEmpty, IsOptional, IsString } from '@nestjs/class-validator';
import { randomUUID } from 'crypto';
import { JoinCodes } from '../dtos/join-codes.dto';
import { AllowDownload } from '../enums/allow-download.enum';
import slugify from '../helpers/slugify';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';
import { KysoRole } from './kyso-role.model';
import { OrganizationOptions } from './organization-options.model';

export class Organization extends BaseModel implements StaticImplements<ApiMethods<Organization>, typeof Organization> {
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

  @IsString()
  public invitation_code: string;

  @IsMongoId()
  public user_id: string;

  @IsOptional()
  public join_codes: JoinCodes | null;

  @IsEnum(AllowDownload)
  public allow_download: AllowDownload;

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
    invitation_code: string,
    user_id: string,
    allow_download: AllowDownload,
    id?: string,
    sluglified_name?: string,
    options?: OrganizationOptions,
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
    this.invitation_code = invitation_code;
    this.user_id = user_id;
    this.allow_download = allow_download;
    this.join_codes = null;

    if (options) {
      this.options = options;
    } else {
      this.options = new OrganizationOptions();
    }

    if (id) {
      this.id = id;
    }
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): Organization {
    return new Organization('', '', [], [], '', '', '', false, '', '', '', '', '', '', AllowDownload.ALL);
  }

  static examples(): { [key: string]: { value: Organization } } {
    return {
      Organization: {
        value: Organization.createEmpty(),
      },
    };
  }
}
