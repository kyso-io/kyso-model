import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsMongoId, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { TeamVisibilityEnum } from '../enums/team-visibility.enum';
import { BaseModel } from './base.model';
import { KysoRole } from './kyso-role.model';
import 'reflect-metadata';

export class Team extends BaseModel {
  @ApiProperty()
  @IsNotEmpty()
  public name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  public avatar_url: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  public bio: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  public link: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  public location: string;

  @ApiProperty({
    required: true,
    type: KysoRole,
    isArray: true,
  })
  @IsArray()
  // @ValidateNested({ each: true })
  // @Type(() => KysoRole)
  public roles: KysoRole[];

  @ApiProperty({
    required: true,
    enum: TeamVisibilityEnum,
  })
  @IsEnum(TeamVisibilityEnum)
  public visibility: TeamVisibilityEnum;

  @ApiProperty({
    required: true,
  })
  @IsMongoId()
  public organization_id: string;

  constructor(name: string, avatar_url: string, bio: string, link: string, location: string, roles: KysoRole[], organization_id: string, visibility: TeamVisibilityEnum, id?: string) {
    super();

    this.name = name;
    this.avatar_url = avatar_url;
    this.bio = bio;
    this.link = link;
    this.location = location;
    this.roles = roles;
    this.organization_id = organization_id;
    this.visibility = visibility;

    if (id) {
      this.id = id;
    }
  }
}
