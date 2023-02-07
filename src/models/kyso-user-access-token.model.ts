import { IsArray, IsDate, IsEnum, IsMongoId, IsNumber, IsString } from '@nestjs/class-validator';
import { KysoPermissions } from '../enums/general-permissions.enum';
import { KysoUserAccessTokenStatus } from '../enums/kyso-user-access-token-status.enum';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class KysoUserAccessToken extends BaseModel implements StaticImplements<ApiMethods<KysoUserAccessToken>, typeof KysoUserAccessToken> {
  @IsMongoId()
  public user_id: string;

  @IsString()
  public name: string;

  @IsEnum(KysoUserAccessTokenStatus)
  public status: KysoUserAccessTokenStatus;

  @IsDate()
  public expiration_date: Date;

  @IsDate()
  public last_used: Date;

  @IsArray()
  public scope: KysoPermissions[];

  @IsNumber()
  /**
   * Number of calls did using this access_token
   */
  public hits: number;

  @IsString()
  public access_token: string;

  constructor(user_id: string, name: string, status: KysoUserAccessTokenStatus, expiration_date: Date, last_used: Date, scope: KysoPermissions[], hits: number, access_token: string) {
    super();
    this.user_id = user_id;
    this.name = name;
    this.status = status;
    this.expiration_date = expiration_date;
    this.last_used = last_used;
    this.scope = scope;
    this.hits = hits;
    this.access_token = access_token;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): KysoUserAccessToken {
    return new KysoUserAccessToken('', '', KysoUserAccessTokenStatus.ACTIVE, new Date(), new Date(), [], 0, '');
  }

  static examples(): { [key: string]: { value: KysoUserAccessToken } } {
    return {
      KysoUserAccessToken: {
        value: KysoUserAccessToken.createEmpty(),
      },
    };
  }
}
