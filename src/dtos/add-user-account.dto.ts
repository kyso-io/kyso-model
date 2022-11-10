import { IsEnum, IsNotEmpty } from 'class-validator';
import { LoginProviderEnum } from '../enums/login-provider.enum';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class AddUserAccountDTO extends BaseDto implements StaticImplements<ApiMethods<AddUserAccountDTO>, typeof AddUserAccountDTO> {
  @IsEnum(LoginProviderEnum)
  public provider: LoginProviderEnum;

  @IsNotEmpty()
  public code: string;

  constructor(provider: LoginProviderEnum, code: string) {
    super();
    this.provider = provider;
    this.code = code;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): AddUserAccountDTO {
    return new AddUserAccountDTO(LoginProviderEnum.KYSO, '');
  }

  static examples(): { [key: string]: { value: AddUserAccountDTO } } {
    return {
      AddUserAccountDTO: {
        value: AddUserAccountDTO.createEmpty(),
      },
    };
  }
}
