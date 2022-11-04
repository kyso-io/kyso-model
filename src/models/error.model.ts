import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class Error extends BaseModel implements StaticImplements<ApiMethods<Error>, typeof Error> {
  public error: string;

  constructor(error: string) {
    super();
    this.error = error;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): Error {
    return new Error('');
  }

  static examples(): { [key: string]: { value: Error } } {
    return {
      Error: {
        value: Error.createEmpty(),
      },
    };
  }
}
