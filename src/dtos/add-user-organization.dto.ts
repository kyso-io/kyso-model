import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class AddUserOrganizationDto {
  @IsMongoId()
  public organizationId!: string;

  @IsMongoId()
  public userId!: string;

  @IsNotEmpty()
  @IsString()
  public role!: string;
}
