import { Exclude } from 'class-transformer';
import { IsAlphanumeric, IsArray, IsBoolean, IsDate, IsOptional } from 'class-validator';
import { CreateUserRequestDTO } from '../dtos/create-user-request.dto';
import { GlobalPermissionsEnum } from '../enums/general-permissions.enum';
import { LoginProviderEnum } from '../enums/login-provider.enum';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseUser } from './base-user.model';
import { OnboardingProgress } from './onboarding-progress.model';
import { UserAccount } from './user-account.model';

export class User extends BaseUser implements StaticImplements<ApiMethods<User>, typeof User> {
  @IsAlphanumeric()
  @Exclude()
  public hashed_password: string;

  @IsAlphanumeric()
  @IsOptional()
  public accessToken: string;

  @IsAlphanumeric()
  @IsOptional()
  public _email_verify_token?: string;

  @IsArray()
  // @ValidateNested({ each: true })
  // @Type(() => UserAccount)
  public accounts: UserAccount[];

  @IsDate()
  public last_login?: Date | null;

  @IsBoolean()
  public show_onboarding: boolean;

  public onboarding_progress: OnboardingProgress;

  constructor(
    email: string,
    username: string,
    name: string,
    display_name: string,
    provider: LoginProviderEnum,
    bio: string,
    location: string,
    link: string,
    plan: string,
    avatarUrl: string,
    background_image_url: string,
    emailVerified: boolean,
    global_permissions: GlobalPermissionsEnum[],
    hashed_password: string,
    access_token: string,
    show_onboarding: boolean,
    onboarding_progress: OnboardingProgress,
    _id?: string,
    _email_verify_token?: string,
  ) {
    super(email, username, name, display_name, provider, bio, location, link, plan, avatarUrl, background_image_url, emailVerified, global_permissions, _id);

    this.onboarding_progress = onboarding_progress;
    this.show_onboarding = show_onboarding;
    this.hashed_password = hashed_password;
    this.accessToken = access_token;

    if (_email_verify_token) {
      this._email_verify_token = _email_verify_token;
    }
    this.accounts = [];
    this.last_login = null;
  }

  static fromGithubUser(userData: any, emailData: any): User {
    return new User(
      emailData.email, // email
      userData.login, // username
      userData.name, //name
      userData.login, // display_name
      LoginProviderEnum.GITHUB, // Login provider
      '', // Bio
      '', // Location
      '', // Link
      'free', // Plan
      userData.avatar_url, // Avatar URL
      userData.background_image_url, // Background Image URL
      true, // email_verified
      [], // GlobalPermissionsEnum
      '', // hashed_password
      '', //access_token
      true, // show_onboarding
      new OnboardingProgress(false, false, false, false, false), // onboarding_progress
    );
  }

  static fromCreateUserRequest(request: CreateUserRequestDTO): User {
    return new User(
      request.email,
      request.username,
      request.name,
      request.display_name,
      request.provider,
      request.bio,
      request.location,
      request.link,
      request.plan,
      request.avatar_url,
      request.background_image_url,
      false, // email_verified
      request.global_permissions,
      '', // hashed_password
      '', // access_token
      true, // show_onboarding
      new OnboardingProgress(false, false, false, false, false), // onboarding_progress
    );
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): User {
    return new User(
      '', // email
      '', // username
      '', // name
      '', // display_name
      LoginProviderEnum.KYSO, // login provider
      '', // bio
      '', // location
      '', // link
      'free', // plan
      '', // avatar_url
      '', // background_image_url
      false, // email_verified
      [], // global_permissions
      '', // hashed_password
      '', // access_token
      false, // show_onboarding
      new OnboardingProgress(false, false, false, false, false), // onboarding_progress
    );
  }

  static examples(): { [key: string]: { value: User } } {
    return {
      User: {
        value: User.createEmpty(),
      },
    };
  }
}
