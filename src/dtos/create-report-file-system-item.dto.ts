import { ApiMethods } from '../interfaces/api-methods';
import { BaseModel } from '../models/base.model';
import { StaticImplements } from '../types/static-implements';

export class CreateReportFileSystemItemDTO extends BaseModel implements StaticImplements<ApiMethods<CreateReportFileSystemItemDTO>, typeof CreateReportFileSystemItemDTO> {
  public path: string;

  public name: string;

  public type: string;

  public parentId: string | null;

  public text: string | null;

  constructor(id: string, path: string, name: string, type: string, text: string, parentId?: string) {
    super(id);
    this.name = name;
    this.path = path;
    this.type = type;
    this.text = text;

    if (parentId) {
      this.parentId = parentId;
    } else {
      this.parentId = null;
    }
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): CreateReportFileSystemItemDTO {
    return new CreateReportFileSystemItemDTO('', '', '', '', '');
  }

  static examples(): { [key: string]: { value: CreateReportFileSystemItemDTO } } {
    return {
      CreateReportFileSystemItemDTO: {
        value: CreateReportFileSystemItemDTO.createEmpty(),
      },
    };
  }
}
