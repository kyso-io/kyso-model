import { IsArray, IsEnum, IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { randomUUID } from 'crypto';
import { TeamVisibilityEnum } from '../enums/team-visibility.enum';
import slugify from '../helpers/slugify';
import { BaseModel } from './base.model';
import { KysoRole } from './kyso-role.model';

export class Team extends BaseModel {
  @IsNotEmpty()
  // @Matches('(?=\S*[-])([a-zA-Z-]+)')  // name-name-name NOT SURE
  public sluglified_name: string;

  @IsNotEmpty()
  @IsString()
  public display_name: string;

  @IsOptional()
  @IsString()
  public avatar_url: string;

  @IsOptional()
  @IsString()
  public bio: string;

  @IsOptional()
  @IsString()
  public link: string;

  @IsOptional()
  @IsString()
  public location: string;

  @IsArray()
  // @ValidateNested({ each: true })
  // @Type(() => KysoRole)
  public roles: KysoRole[];

  @IsEnum(TeamVisibilityEnum)
  public visibility: TeamVisibilityEnum;

  @IsMongoId()
  public organization_id: string;

  @IsOptional()
  @IsString()
  public slackChannel: string | null;

  constructor(
    display_name: string,
    avatar_url: string,
    bio: string,
    link: string,
    location: string,
    roles: KysoRole[],
    organization_id: string,
    visibility: TeamVisibilityEnum,
    id?: string,
    sluglified_name?: string
  ) {
    super();
    this.display_name = display_name;
    if (sluglified_name) {
      this.sluglified_name = sluglified_name;
    } else {
      if (display_name) {
        this.sluglified_name = slugify(display_name);
      } else {
        this.sluglified_name = randomUUID();
      }
    }
    this.avatar_url = avatar_url;
    this.bio = bio;
    this.link = link;
    this.location = location;
    this.roles = roles;
    this.organization_id = organization_id;
    this.visibility = visibility;
    this.slackChannel = null;
    if (id) {
      this.id = id;
    }
  }
}
