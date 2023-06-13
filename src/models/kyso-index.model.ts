import { ElasticSearchIndex } from '../enums/elastic-search-index.enum';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class KysoIndex extends BaseModel implements StaticImplements<ApiMethods<KysoIndex>, typeof KysoIndex> {
  public title: string;
  public type: ElasticSearchIndex;
  public entityId: string;
  public link: string;
  public organizationSlug: string;
  public teamSlug: string;
  public people: string[];
  public tags: string[];
  public content: string;
  public version: number;
  public filePath: string;
  public stars: number;
  public numComments: number;
  public numTasks: number;
  public updatedAt: number;

  constructor() {
    super();
    this.title = '';
    this.type = ElasticSearchIndex.Report;
    this.entityId = '';
    this.link = '';
    this.organizationSlug = '';
    this.teamSlug = '';
    this.people = [];
    this.tags = [];
    this.content = '';
    this.version = 1;
    this.filePath = '';
    this.stars = 0;
    this.numComments = 0;
    this.numTasks = 0;
    this.updatedAt = 0;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): KysoIndex {
    return new KysoIndex();
  }

  static examples(): { [key: string]: { value: KysoIndex } } {
    return {
      KysoIndex: {
        value: KysoIndex.createEmpty(),
      },
    };
  }
}
