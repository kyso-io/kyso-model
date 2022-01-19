<<<<<<< HEAD
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
=======
>>>>>>> 0a199bfb737f6135edd6d6a74a6149bd62716750

import { IsArray, IsBoolean, IsEmail, IsNotEmpty } from 'class-validator';
import { BaseModel } from './base.model';
import { KysoRole } from './kyso-role.model';

export class Organization extends BaseModel {
  @IsNotEmpty()
  public name: string;

  @ApiModelProperty({
    required: true,
    type: KysoRole,
    isArray: true,
  })
  @IsArray()
  // @ValidateNested({ each: true })
  // @Type(() => KysoRole)
  public roles: KysoRole[];

  @ApiModelProperty({
    description: 'Mail where the billing communications will go',
  })
  @IsEmail()
  public billingEmail: string;

  @ApiModelProperty({
    description: 'Stripe identificator for payments',
  })
  public subscriptionId: string;

  @ApiModelProperty({
    description: 'Flag to allow or deny login into the organization using google accounts. True allows google login, false deny it',
    default: true,
  })
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
