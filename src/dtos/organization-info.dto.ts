import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class OrganizationInfoDto extends BaseDto implements StaticImplements<ApiMethods<OrganizationInfoDto>, typeof OrganizationInfoDto> {
  public organization_id: string;
  public members: number;
  public reports: number;
  public discussions: number;
  public comments: number;
  public lastChange: Date;
  public avatar_url: string;

  constructor(organization_id: string, members: number, reports: number, discussions: number, comments: number, lastChange: Date, avatar_url: string) {
    super();
    this.organization_id = organization_id;
    this.members = members;
    this.reports = reports;
    this.discussions = discussions;
    this.comments = comments;
    this.lastChange = lastChange;
    this.avatar_url = avatar_url;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): OrganizationInfoDto {
    return new OrganizationInfoDto('', 0, 0, 0, 0, new Date(), '');
  }

  static examples(): { [key: string]: { value: OrganizationInfoDto } } {
    return {
      OrganizationInfoDto: {
        value: OrganizationInfoDto.createEmpty(),
      },
    };
  }
}
