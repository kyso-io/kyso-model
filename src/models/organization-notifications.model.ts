import { IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator';

export class OrganizationNotifications {
  @IsBoolean()
  public centralized!: boolean;

  @IsEmail({ each: true })
  public emails!: string[];

  @IsOptional()
  @IsString()
  public slackToken!: string | null;
  
  @IsOptional()
  @IsString()
  public slackChannel!: string | null;

  constructor() {
    this.centralized = false;
    this.emails = [];
    this.slackToken = null;
    this.slackChannel = null;
  }
}