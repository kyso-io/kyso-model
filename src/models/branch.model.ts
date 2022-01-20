export class Branch {
  public name: string;

  public commit: string;

  public is_default: boolean;

  constructor(name: string, commit: string, is_default: boolean) {
    this.name = name;
    this.commit = commit;
    this.is_default = is_default;
  }
}
