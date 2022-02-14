import { Exclude } from 'class-transformer';
import { IsAlphanumeric, IsArray, IsDate, IsEnum, IsMongoId, IsNumber, IsOptional, IsString } from 'class-validator';
import { BaseModel, User } from '..';
import { CreateUserRequestDTO } from '../dtos/create-user-request.dto';
import { GlobalPermissionsEnum, KysoPermissions } from '../enums/general-permissions.enum';
import { KysoUserAccessTokenStatus } from '../enums/kyso-user-access-token-status.enum';
import { LoginProviderEnum } from '../enums/login-provider.enum';
import { BaseUser } from './base-user.model';
import { UserAccount } from './user-account.model';

export class KysoUserAccessToken extends BaseModel {
  @IsMongoId()
  public user_id : string;

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


  constructor(user_id: string, name: string, status: KysoUserAccessTokenStatus, expiration_date: Date, last_used: Date,
    scope: KysoPermissions[], hits: number, access_token: string) {
    super();
    this.user_id = user_id
    this.name = name
    this.status = status 
    this.expiration_date = expiration_date
    this.last_used = last_used
    this.scope = scope
    this.hits = hits 
    this.access_token = access_token
  }
}
