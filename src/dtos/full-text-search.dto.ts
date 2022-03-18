export class FullTextSearchResult {
  public title: string;
  public summary: string;
  public link: string;
  public type: string;
  public people: string[];
  public team: string;
  public organization: string;
  public tags: string[];
  public score: number;

  constructor(title: string, summary: string, link: string, type: string, people: string[], team: string, organization: string, tags: string[], score: number) {
    this.title = title;
    this.summary = summary;
    this.link = link;
    this.type = type;
    this.people = people;
    this.team = team;
    this.organization = organization;
    this.tags = tags;
    this.score = score;
  }
}

export class FullTextSearchMetadata {
  public page: number;
  public pages: number;
  public perPage: number;
  public total: number;
  
  constructor(page: number, pages: number, perPage: number, total: number) {
    this.page = page;
    this.pages = pages;
    this.perPage = perPage;
    this.total = total;
  }
}

export class FullTextSearchResultType {
  public results: FullTextSearchResult[];
  public organizations: string[];
  public teams: string[];
  public tags: string[];
  public metadata: FullTextSearchMetadata;

  constructor(results: FullTextSearchResult[], organizations: string[], teams: string[], tags: string[], metadata: FullTextSearchMetadata) {
    this.results = results;
    this.organizations = organizations;
    this.teams = teams;
    this.tags = tags;
    this.metadata = metadata;
  }
}

export class FullTextSearchDTO {
  public reports: FullTextSearchResultType;
  public discussions: FullTextSearchResultType;
  public comments: FullTextSearchResultType;
  public members: FullTextSearchResultType;

  constructor(reports: FullTextSearchResultType, discussions: FullTextSearchResultType, comments: FullTextSearchResultType, members: FullTextSearchResultType) {
    this.reports = reports;
    this.discussions = discussions;
    this.comments = comments;
    this.members = members;
  }
}
