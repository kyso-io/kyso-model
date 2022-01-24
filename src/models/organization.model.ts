import { IsArray, IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { BaseModel } from './base.model';
import { KysoRole } from './kyso-role.model';

export class Organization extends BaseModel {
  @IsNotEmpty()
  public name: string;

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

  constructor(name: string, legal_name: string, roles: KysoRole[], allowed_access_domains: string[],
    billingEmail: string, stripe_subscription_id: string, tax_identifier: string, allowGoogleLogin: boolean, id?: string) {
    super();

    this.name = name;
    this.legal_name = legal_name;
    this.roles = roles;
    this.allowed_access_domains = allowed_access_domains;
    this.billingEmail = billingEmail;
    this.stripe_subscription_id = stripe_subscription_id;
    this.allowGoogleLogin = allowGoogleLogin;
    this.tax_identifier = tax_identifier;

    if (id) {
      this.id = id;
    }
  }
}
