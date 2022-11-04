import { ApiMethods } from '../interfaces/api-methods';
import { BaseModel } from '../models/base.model';
import { StaticImplements } from '../types/static-implements';

export class BaseFilterQueryDTO extends BaseModel implements StaticImplements<ApiMethods<BaseFilterQueryDTO>, typeof BaseFilterQueryDTO> {
  public page: number;
  public per_page: number;
  public fields: string | null;
  public sort: string | null;

  constructor(page: number, per_page: number, fields: string | null, sort: string | null) {
    super();
    this.page = page;
    this.per_page = per_page;
    this.fields = fields;
    this.sort = sort;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): BaseFilterQueryDTO {
    return new BaseFilterQueryDTO(1, 10, null, null);
  }

  static examples(): { [key: string]: { value: BaseFilterQueryDTO } } {
    return {
      BaseFilterQueryDTO: {
        value: BaseFilterQueryDTO.createEmpty(),
      },
    };
  }
}
