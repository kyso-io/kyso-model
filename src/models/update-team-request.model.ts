import { IsEnum, IsOptional, IsString } from '@nestjs/class-validator';
import { AllowDownload } from '../enums/allow-download.enum';
import { TeamVisibilityEnum } from '../enums/team-visibility.enum';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class UpdateTeamRequest extends BaseModel implements StaticImplements<ApiMethods<UpdateTeamRequest>, typeof UpdateTeamRequest> {
  @IsOptional()
  @IsString()
  public display_name: string;

  @IsOptional()
  @IsString()
  public location: string;

  @IsOptional()
  @IsString()
  public link: string;

  @IsOptional()
  @IsString()
  public bio: string;

  @IsOptional()
  @IsEnum(TeamVisibilityEnum)
  public visibility: TeamVisibilityEnum;

  @IsOptional()
  @IsEnum(AllowDownload)
  public allow_download: AllowDownload;

  @IsOptional()
  @IsString()
  public slackChannel: string | null;

  @IsOptional()
  @IsString()
  public teamsIncomingWebhookUrl: string | null;

  constructor(
    display_name: string,
    location: string,
    link: string,
    bio: string,
    visibility: TeamVisibilityEnum,
    allow_download: AllowDownload,
    slackChannel: string | null,
    teamsIncomingWebhookUrl: string | null,
  ) {
    super();
    this.display_name = display_name;
    this.location = location;
    this.link = link;
    this.bio = bio;
    this.visibility = visibility;
    this.allow_download = allow_download;
    this.slackChannel = slackChannel;
    this.teamsIncomingWebhookUrl = teamsIncomingWebhookUrl;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): UpdateTeamRequest {
    return new UpdateTeamRequest('', '', '', '', TeamVisibilityEnum.PRIVATE, AllowDownload.NONE, null, null);
  }

  static examples(): { [key: string]: { value: UpdateTeamRequest } } {
    return {
      UpdateTeamRequest: {
        value: UpdateTeamRequest.createEmpty(),
      },
    };
  }
}
