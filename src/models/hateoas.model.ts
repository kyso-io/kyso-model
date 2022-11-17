import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';

export class Hateoas implements StaticImplements<ApiMethods<Hateoas>, typeof Hateoas> {
  public self_api: string;

  public self_ui: string;

  constructor(self_api: string, self_ui: string) {
    this.self_api = self_api;
    this.self_ui = self_ui;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): Hateoas {
    return new Hateoas('', '');
  }

  static examples(): { [key: string]: { value: Hateoas } } {
    return {
      Hateoas: {
        value: Hateoas.createEmpty(),
      },
    };
  }
}
