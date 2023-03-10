import { IsInt, IsMongoId, IsOptional, IsString, Max, Min } from '@nestjs/class-validator';
import { Type } from 'class-transformer';

export class TeamsInfoQuery {
  @IsMongoId()
  public organizationId!: string;

  @IsOptional()
  @IsMongoId()
  public teamId!: string;

  @IsInt()
  @Min(1)
  @Type(() => Number)
  public page!: number;

  @IsInt()
  @Min(1)
  @Max(25)
  @Type(() => Number)
  public limit!: number;

  @IsOptional()
  @IsString()
  public search!: string;
}
