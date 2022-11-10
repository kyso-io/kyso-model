import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { ApiMethods } from '../../interfaces/api-methods';
import { StaticImplements } from '../../types/static-implements';
import { BaseModel } from '../base.model';

export class PingIdSAMLSpec extends BaseModel implements StaticImplements<ApiMethods<PingIdSAMLSpec>, typeof PingIdSAMLSpec> {
  @IsNotEmpty()
  @IsUrl()
  public sso_url: string;

  @IsString()
  @IsNotEmpty()
  public environment_code: string;

  @IsString()
  @IsNotEmpty()
  public sp_entity_id: string;

  constructor(sso_url: string, environment_code: string, sp_entity_id: string) {
    super();
    this.sso_url = sso_url;
    this.environment_code = environment_code;
    this.sp_entity_id = sp_entity_id;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): PingIdSAMLSpec {
    return new PingIdSAMLSpec('', '', '');
  }

  static examples(): { [key: string]: { value: PingIdSAMLSpec } } {
    return {
      PingIdSAMLSpec: {
        value: PingIdSAMLSpec.createEmpty(),
      },
    };
  }
}
