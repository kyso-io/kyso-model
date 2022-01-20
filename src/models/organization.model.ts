
import { IsArray, IsBoolean, IsEmail, IsNotEmpty } from 'class-validator';
import { BaseModel } from './base.model';
import { KysoRole } from './kyso-role.model';

export class Organization extends BaseModel {
  @IsNotEmpty()
  public name: string;

  @IsArray()
  // @ValidateNested({ each: true })
  // @Type(() => KysoRole)
  public roles: KysoRole[];

  @IsEmail()
  public billingEmail: string;
  public subscriptionId: string;

  @IsBoolean()
  public allowGoogleLogin: boolean;

  constructor(name: string, roles: KysoRole[], billingEmail: string, subscriptionId: string, allowGoogleLogin: boolean, id?: string) {
    super();

    this.name = name;
    this.roles = roles;
    this.billingEmail = billingEmail;
    this.subscriptionId = subscriptionId;
    this.allowGoogleLogin = allowGoogleLogin;

    if (id) {
      this.id = id;
    }
  }
}
