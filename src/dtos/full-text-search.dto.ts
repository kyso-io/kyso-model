import { ElasticSearchIndex } from '../enums/elastic-search-index.enum';
import { ApiMethods } from '../interfaces/api-methods';
import { BaseModel } from '../models/base.model';
import { KysoIndex } from '../models/kyso-index.model';
import { StaticImplements } from '../types/static-implements';

export class FullTextSearchResult extends KysoIndex implements StaticImplements<ApiMethods<FullTextSearchResult>, typeof FullTextSearchResult> {
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
    this.score = score;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): FullTextSearchResult {
    return new FullTextSearchResult('', ElasticSearchIndex.Report, '', '', '', '', [], [], '', 0, '', 0);
  }

  static examples(): { [key: string]: { value: FullTextSearchResult } } {
    return {
      FullTextSearchResult: {
        value: FullTextSearchResult.createEmpty(),
      },
    };
  }
}

export interface FullTextSearchAggregator {
  key: string;
  doc_count: number;
}

export class FullTextSearchAggregators extends BaseModel implements StaticImplements<ApiMethods<FullTextSearchAggregators>, typeof FullTextSearchAggregators> {
  public organizations: FullTextSearchAggregator[];
  public teams: FullTextSearchAggregator[];
  public people: FullTextSearchAggregator[];
  public tags: FullTextSearchAggregator[];
  public file_types: FullTextSearchAggregator[];

  constructor(
    organizations: FullTextSearchAggregator[],
    teams: FullTextSearchAggregator[],
    people: FullTextSearchAggregator[],
    tags: FullTextSearchAggregator[],
    file_types: FullTextSearchAggregator[],
  ) {
    super();
    this.organizations = organizations;
    this.teams = teams;
    this.people = people;
    this.tags = tags;
    this.file_types = file_types;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): FullTextSearchAggregators {
    return new FullTextSearchAggregators([], [], [], [], []);
  }

  static examples(): { [key: string]: { value: FullTextSearchAggregators } } {
    return {
      FullTextSearchAggregators: {
        value: FullTextSearchAggregators.createEmpty(),
      },
    };
  }
}

export class FullTextSearchMetadata extends BaseModel implements StaticImplements<ApiMethods<FullTextSearchMetadata>, typeof FullTextSearchMetadata> {
  public page: number;
  public pages: number;
  public perPage: number;
  public total: number;
  public aggregators: FullTextSearchAggregators;

  constructor(page: number, pages: number, perPage: number, total: number, aggregators: FullTextSearchAggregators) {
    super();
    this.page = page;
    this.pages = pages;
    this.perPage = perPage;
    this.total = total;
    this.aggregators = aggregators;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): FullTextSearchMetadata {
    return new FullTextSearchMetadata(0, 0, 0, 0, FullTextSearchAggregators.createEmpty());
  }

  static examples(): { [key: string]: { value: FullTextSearchMetadata } } {
    return {
      FullTextSearchMetadata: {
        value: FullTextSearchMetadata.createEmpty(),
      },
    };
  }
}

export class FullTextSearchResultType extends BaseModel implements StaticImplements<ApiMethods<FullTextSearchResultType>, typeof FullTextSearchResultType> {
  public results: FullTextSearchResult[];
  public metadata: FullTextSearchMetadata;

  constructor(results: FullTextSearchResult[], metadata: FullTextSearchMetadata) {
    super();
    this.results = results;
    this.metadata = metadata;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): FullTextSearchResultType {
    return new FullTextSearchResultType([], FullTextSearchMetadata.createEmpty());
  }

  static examples(): { [key: string]: { value: FullTextSearchResultType } } {
    return {
      FullTextSearchResultType: {
        value: FullTextSearchResultType.createEmpty(),
      },
    };
  }
}

export class FullTextSearchDTO extends BaseModel implements StaticImplements<ApiMethods<FullTextSearchDTO>, typeof FullTextSearchDTO> {
  public reports: FullTextSearchResultType;
  public discussions: FullTextSearchResultType;
  public comments: FullTextSearchResultType;
  public members: FullTextSearchResultType;
  public inlineComments: FullTextSearchResultType;

  constructor(
    reports: FullTextSearchResultType,
    discussions: FullTextSearchResultType,
    comments: FullTextSearchResultType,
    members: FullTextSearchResultType,
    inlineComments: FullTextSearchResultType,
  ) {
    super();
    this.reports = reports;
    this.discussions = discussions;
    this.comments = comments;
    this.members = members;
    this.inlineComments = inlineComments;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): FullTextSearchDTO {
    return new FullTextSearchDTO(
      FullTextSearchResultType.createEmpty(),
      FullTextSearchResultType.createEmpty(),
      FullTextSearchResultType.createEmpty(),
      FullTextSearchResultType.createEmpty(),
      FullTextSearchResultType.createEmpty(),
    );
  }

  static examples(): { [key: string]: { value: FullTextSearchDTO } } {
    return {
      FullTextSearchDTO: {
        value: FullTextSearchDTO.createEmpty(),
      },
    };
  }
}
