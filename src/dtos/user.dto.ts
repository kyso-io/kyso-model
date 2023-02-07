import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsOptional, IsString, IsUrl } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { OnboardingProgress } from '../models/onboarding-progress.model';
import { UserAccount } from '../models/user-account.model';
import { User } from '../models/user.model';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class UserDTO extends BaseDto implements StaticImplements<ApiMethods<UserDTO>, typeof UserDTO> {
  @IsString()
  @IsNotEmpty()
  public id: string;

  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @IsString()
  @IsNotEmpty()
  public username: string;

  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public display_name: string;

  @IsString()
  public bio: string;

  @IsString()
  @IsNotEmpty()
  public plan: string;

  @IsOptional()
  @IsUrl()
  public avatar_url: string;

  @IsOptional()
  @IsUrl()
  public background_image_url: string;

  @IsString()
  public location: string;

  @IsString()
  public link: string;

  @IsDate()
  public created_at: Date;

  public accounts: UserAccount[];

  @IsBoolean()
  public email_verified: boolean;

  @IsBoolean()
  public show_captcha: boolean;

  @IsBoolean()
  public show_onboarding: boolean;

  public onboarding_progress: OnboardingProgress;

  constructor(
    id: string,
    email: string,
    username: string,
    name: string,
    display_name: string,
    bio: string,
    location: string,
    link: string,
    plan: string,
    avatar_url: string,
    background_image_url: string,
    created_at: Date,
    accounts: UserAccount[],
    email_verified: boolean,
    show_captcha: boolean,
    show_onboarding: boolean,
    onboarding_progress: OnboardingProgress,
  ) {
    super();
    this.id = id;
    this.email = email;
    this.username = username;
    this.name = name;
    this.display_name = display_name;
    this.bio = bio;
    this.location = location;
    this.link = link;
    this.plan = plan;
    this.avatar_url = avatar_url;
    this.background_image_url = background_image_url;
    this.created_at = created_at;
    this.accounts = accounts;
    this.email_verified = email_verified;
    this.show_captcha = show_captcha;
    this.show_onboarding = show_onboarding;
    this.onboarding_progress = onboarding_progress;
  }

  public static fromUser(user: User): UserDTO {
    return new UserDTO(
      user.id ? user.id : 'null',
      user.email,
      user.username,
      user.name,
      user.display_name,
      user.bio,
      user.location,
      user.link,
      user.plan,
      user.avatar_url,
      user.background_image_url,
      user.created_at!,
      user.accounts ? user.accounts : [],
      user.email_verified,
      user.show_captcha,
      user.show_onboarding,
      user.onboarding_progress,
    );
  }

  public static fromUserArray(user: User[]): UserDTO[] {
    return user.map((x: User) => UserDTO.fromUser(x));
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): UserDTO {
    return new UserDTO('', '', '', '', '', '', '', '', '', '', '', new Date(), [], false, true, true, OnboardingProgress.createEmpty());
  }

  static examples(): { [key: string]: { value: UserDTO } } {
    return {
      UserDTO: {
        value: UserDTO.createEmpty(),
      },
    };
  }
}
