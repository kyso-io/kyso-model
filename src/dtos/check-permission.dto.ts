import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { KysoPermissions } from '../enums/general-permissions.enum';

export class CheckPermissionDto {
  @IsString()
  @IsNotEmpty()
  public organization!: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public team!: string;

  @IsString()
  @IsNotEmpty()
  public permission!: KysoPermissions;
}
