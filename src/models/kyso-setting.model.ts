import { IsString } from 'class-validator';
import { ApiMethods, BaseModel, StaticImplements } from '..';

export class KysoSetting extends BaseModel implements StaticImplements<ApiMethods<KysoSetting>, typeof KysoSetting> {
  @IsString()
  public key: string;

  @IsString()
  public description: string;

  @IsString()
  public value: string;

  constructor(key: string, description: string, value: string) {
    super();
    this.key = key;
    this.description = description;
    this.value = value;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): KysoSetting {
    return new KysoSetting('', '', '');
  }

  static examples(): { [key: string]: { value: KysoSetting } } {
    return {
      KysoSetting: {
        value: KysoSetting.createEmpty(),
      },
    };
  }
}
