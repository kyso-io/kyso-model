import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateOrganizationDto {
  @IsNotEmpty()
  @IsString()
  public display_name!: string;

  @IsOptional()
  @IsString()
  public bio!: string;

  @IsOptional()
  @IsString()
  public location!: string;

  @IsOptional()
  @IsString()
  public link!: string;
}
