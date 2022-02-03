import { IsOptional, IsString } from 'class-validator';

export class UpdateUserRequestDTO {
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
