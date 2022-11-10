import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class ActionWithPayload<T> extends BaseModel implements StaticImplements<ApiMethods<ActionWithPayload<T>>, typeof ActionWithPayload> {
  public payload: T | null;

  constructor(payload: T | null) {
    super();
    this.payload = payload;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty<T>(): ActionWithPayload<T> {
    return new ActionWithPayload<T>(null);
  }

  static examples<T>(): { [key: string]: { value: ActionWithPayload<T> } } {
    return {
      ActionWithPayload: {
        value: ActionWithPayload.createEmpty(),
      },
    };
  }
}
