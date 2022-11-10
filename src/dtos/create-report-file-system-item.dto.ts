import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class CreateReportFileSystemItemDTO extends BaseDto implements StaticImplements<ApiMethods<CreateReportFileSystemItemDTO>, typeof CreateReportFileSystemItemDTO> {
  public id: string;

  public path: string;

  public name: string;

  public type: string;

  public parentId: string | null;

  public text: string | null;

  constructor(id: string, path: string, name: string, type: string, text: string, parentId?: string) {
    super();
    this.id = id;
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
