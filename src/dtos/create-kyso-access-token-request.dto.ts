import { IsArray, IsDate, IsNotEmpty, IsOptional } from 'class-validator';
import { KysoPermissions } from '..';

export class CreateKysoAccessTokenDto {
  @IsNotEmpty()
  public user_id: string;

  @IsNotEmpty()
  public name: string;

  @IsNotEmpty()
  @IsArray()
  public scope: KysoPermissions[];

  @IsOptional()
  @IsDate()
  public expiration_date?: Date

  constructor(user_id: string, name: string, scope: KysoPermissions[], expiration_date?: Date) {
    this.user_id = user_id
    this.name = name
    this.scope = scope
    this.expiration_date = expiration_date
  }
}
