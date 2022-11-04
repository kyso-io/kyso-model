import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class GithubCommit extends BaseModel implements StaticImplements<ApiMethods<GithubCommit>, typeof GithubCommit> {
  public sha: string;
  public author: { name: string; email: string };
  public date: Date;
  public message: string;
  public htmlUrl: string;
  constructor(sha: string, author: { name: string; email: string }, date: Date, message: string, htmlUrl: string) {
    super();
    this.sha = sha;
    this.author = author;
    this.date = date;
    this.message = message;
    this.htmlUrl = htmlUrl;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): GithubCommit {
    return new GithubCommit('', { name: '', email: '' }, new Date(), '', '');
  }

  static examples(): { [key: string]: { value: GithubCommit } } {
    return {
      GithubCommit: {
        value: GithubCommit.createEmpty(),
      },
    };
  }
}
