import { IsOptional, IsString } from 'class-validator';

export class UpdateOrganizationDTO {
  @IsOptional()
  @IsString()
  public location!: string;

  @IsOptional()
  @IsString()
  public link!: string;

  @IsOptional()
  @IsString()
  public bio!: string;
}
