import { Exclude } from 'class-transformer';
import { IsAlphanumeric, IsArray, IsOptional } from 'class-validator';
import { CreateUserRequestDTO } from '../dtos/create-user-request.dto';
import { GlobalPermissionsEnum } from '../enums/general-permissions.enum';
import { LoginProviderEnum } from '../enums/login-provider.enum';
import { BaseUser } from './base-user.model';
import { UserAccount } from './user-account.model';

export class User extends BaseUser {
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
    _id?: string,
    _email_verify_token?: string
  ) {
    super(email, username, name, display_name, provider, bio, location, link, plan, avatarUrl, background_image_url, emailVerified, global_permissions, _id);

    this.hashed_password = hashed_password;
    this.accessToken = access_token;

    if (_email_verify_token) {
      this._email_verify_token = _email_verify_token;
    }
    this.accounts = [];
  }

  static fromGithubUser(userData: any, emailData: any): User {
    return new User(emailData.email, userData.login, userData.name, userData.login, LoginProviderEnum.GITHUB, '', '', '', 'free', userData.avatar_url, userData.background_image_url, true, [], '', '');
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
      false,
      request.global_permissions,
      '',
      ''
    );
  }
}
