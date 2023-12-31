import { IsArray, IsEnum, IsMongoId, IsNotEmpty, IsOptional, IsString } from '@nestjs/class-validator';
import { randomUUID } from 'crypto';
import { AllowDownload } from '../enums/allow-download.enum';
import { TeamVisibilityEnum } from '../enums/team-visibility.enum';
import slugify from '../helpers/slugify';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';
import { KysoRole } from './kyso-role.model';

export class Team extends BaseModel implements StaticImplements<ApiMethods<Team>, typeof Team> {
  @IsNotEmpty()
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

  @IsOptional()
  @IsString()
  public teamsIncomingWebhookUrl: string | null;

  @IsMongoId()
  public user_id: string;

  @IsEnum(AllowDownload)
  public allow_download: AllowDownload;

  constructor(
    display_name: string,
    avatar_url: string,
    bio: string,
    link: string,
    location: string,
    roles: KysoRole[],
    organization_id: string,
    visibility: TeamVisibilityEnum,
    user_id: string,
    allow_download: AllowDownload,
    id?: string,
    sluglified_name?: string,
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
    this.user_id = user_id;
    this.allow_download = allow_download;
    this.slackChannel = null;
    this.teamsIncomingWebhookUrl = null;
    if (id) {
      this.id = id;
    }
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): Team {
    return new Team('', '', '', '', '', [], '', TeamVisibilityEnum.PRIVATE, '', AllowDownload.ALL);
  }

  static examples(): { [key: string]: { value: Team } } {
    return {
      Team: {
        value: Team.createEmpty(),
      },
    };
  }
}
