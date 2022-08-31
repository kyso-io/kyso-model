import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

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
  public permission!: string;
}
