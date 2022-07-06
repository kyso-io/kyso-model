import { ElasticSearchIndex } from '../enums/elastic-search-index.enum';
import { KysoIndex } from '../models/kyso-index.model';

export class FullTextSearchResult extends KysoIndex {
  public score: number;

  constructor(
    title: string,
    type: ElasticSearchIndex,
    entityId: string,
    link: string,
    organizationSlug: string,
    teamSlug: string,
    people: string[],
    tags: string[],
    content: string,
    version: number,
    filePath: string,
    isPublic: boolean,
    score: number,
  ) {
    super();
    this.title = title;
    this.type = type;
    this.entityId = entityId;
    this.link = link;
    this.organizationSlug = organizationSlug;
    this.teamSlug = teamSlug;
    this.people = people;
    this.tags = tags;
    this.content = content;
    this.version = version;
    this.filePath = filePath;
    this.isPublic = isPublic;
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
