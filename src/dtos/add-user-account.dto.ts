import { IsEnum, IsNotEmpty } from 'class-validator';
import { LoginProviderEnum } from '../enums/login-provider.enum';
import { ApiMethods } from '../interfaces/api-methods';
import { BaseModel } from '../models/base.model';
import { StaticImplements } from '../types/static-implements';

export class AddUserAccountDTO extends BaseModel implements StaticImplements<ApiMethods<AddUserAccountDTO>, typeof AddUserAccountDTO> {
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
