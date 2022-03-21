import { IsBoolean, IsEmail } from 'class-validator';

export class OrganizationNotifications {
  @IsBoolean()
  public centralized!: boolean;

  @IsEmail({ each: true })
  public emails!: string[];
}