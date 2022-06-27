import { ElasticSearchIndex } from '../enums/elastic-search-index.enum';

export class KysoIndex {
  public title: string;
  public type: ElasticSearchIndex;
  public entityId: string;
  public link: string;
  public organizationSlug: string;
  public teamSlug: string;
  public people: string;
  public tags: string;
  public content: string;
  public version: number;
  public filePath: string;
  public isPublic: boolean;

  constructor() {
    this.title = '';
    this.type = ElasticSearchIndex.Report;
    this.entityId = '';
    this.link = '';
    this.organizationSlug = '';
    this.teamSlug = '';
    this.people = '';
    this.tags = '';
    this.content = '';
    this.version = 1;
    this.filePath = '';
    this.isPublic = false;
  }
}
