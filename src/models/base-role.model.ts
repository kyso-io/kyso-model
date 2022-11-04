import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class BaseRol extends BaseModel implements StaticImplements<ApiMethods<BaseRol>, typeof BaseRol> {
  constructor(id: string, type: string) {
    super();
    this.id = id;
    this.type = type;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): BaseRol {
    return new BaseRol('', '');
  }

  static examples(): { [key: string]: { value: BaseRol } } {
    return {
      BaseRol: {
        value: BaseRol.createEmpty(),
      },
    };
  }
}
