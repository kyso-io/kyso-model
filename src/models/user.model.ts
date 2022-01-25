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
    nickname: string,
    provider: LoginProviderEnum,
    bio: string,
    plan: string,
    avatarUrl: string,
    emailVerified: boolean,
    global_permissions: GlobalPermissionsEnum[],
    hashed_password: string,
    access_token: string,
    _id?: string,
    _email_verify_token?: string
  ) {
    super(email, username, name, nickname, provider, bio, plan, avatarUrl, emailVerified, global_permissions, _id);

    this.hashed_password = hashed_password;
    this.accessToken = access_token;

    if (_email_verify_token) {
      this._email_verify_token = _email_verify_token;
    }
    this.accounts = [];
  }

  static fromGithubUser(userData: any, emailData: any): User {
    return new User(emailData.email, userData.login, userData.name, userData.login, LoginProviderEnum.GITHUB, '', 'free', userData.avatar_url, true, [], '', '');
  }

  static fromCreateUserRequest(request: CreateUserRequestDTO): User {
    const newUser = new User(
      request.email,
      request.username,
      request.name,
      request.nickname,
      request.provider,
      request.bio,
      request.plan,
      request.avatar_url,
      request.email_verified,
      request.global_permissions,
      '',
      ''
    );

    return newUser;
  }
}
