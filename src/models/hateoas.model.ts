export class Hateoas {
  public self_api: string;

  public self_ui: string;

  constructor(self_api: string, self_ui: string) {
    this.self_api = self_api;
    this.self_ui = self_ui;
  }
}
