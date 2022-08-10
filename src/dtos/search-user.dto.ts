import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class SearchUserDto {
  @IsString()
  @IsNotEmpty()
  public organization_id!: string | null;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public team_id!: string | null;

  @IsString()
  @IsNotEmpty()
  public query!: string | null;

  public payload!: any;
}
