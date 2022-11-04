import { IsAlphanumeric } from 'class-validator';
import { GlobalPermissionsEnum } from '../enums/general-permissions.enum';
import { LoginProviderEnum } from '../enums/login-provider.enum';
import { ApiMethods } from '../interfaces/api-methods';
import { BaseUser } from '../models/base-user.model';
import { StaticImplements } from '../types/static-implements';

export class CreateUserRequestDTO extends BaseUser implements StaticImplements<ApiMethods<CreateUserRequestDTO>, typeof CreateUserRequestDTO> {
  @IsAlphanumeric()
  public password: string;

  constructor(
    email: string,
    username: string,
    name: string,
    nickname: string,
    provider: LoginProviderEnum,
    bio: string,
    location: string,
    link: string,
    plan: string,
    avatar_url: string,
    background_image_url: string,
    email_verified: boolean,
    global_permissions: GlobalPermissionsEnum[],
    password: string,
  ) {
    super(email, username, name, nickname, provider, bio, location, link, plan, avatar_url, background_image_url, email_verified, global_permissions);
    this.password = password;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): CreateUserRequestDTO {
    return new CreateUserRequestDTO('', '', '', '', LoginProviderEnum.KYSO, '', '', '', '', '', '', false, [], '');
  }

  static examples(): { [key: string]: { value: CreateUserRequestDTO } } {
    return {
      CreateUserRequestDTO: {
        value: CreateUserRequestDTO.createEmpty(),
      },
    };
  }
}
