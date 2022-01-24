export class GithubCommit {
  public sha: string;
  public author: { name: string; email: string };
  public date: Date;
  public message: string;
  public htmlUrl: string;
  constructor(sha: string, author: { name: string; email: string }, date: Date, message: string, htmlUrl: string) {
    this.sha = sha;
    this.author = author;
    this.date = date;
    this.message = message;
    this.htmlUrl = htmlUrl;
  }
}
