import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class ApiError extends BaseModel implements StaticImplements<ApiMethods<ApiError>, typeof ApiError> {
  public statusCode: number;

  public message: string;

  public error: string;

  constructor(statusCode: number, message: string, error: string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
    this.error = error;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): ApiError {
    return new ApiError(0, '', '');
  }

  static examples(): { [key: string]: { value: ApiError } } {
    return {
      ApiError: {
        value: ApiError.createEmpty(),
      },
    };
  }
}
