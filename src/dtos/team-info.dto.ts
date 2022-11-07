import { ApiMethods } from '../interfaces/api-methods';
import { BaseModel } from '../models/base.model';
import { StaticImplements } from '../types/static-implements';

export class TeamInfoDto extends BaseModel implements StaticImplements<ApiMethods<TeamInfoDto>, typeof TeamInfoDto> {
  public team_id: string;
  public members: number;
  public reports: number;
  public discussions: number;
  public comments: number;
  public lastChange: Date;

  constructor(team_id: string, members: number, reports: number, discussions: number, comments: number, lastChange: Date) {
    super();
    this.team_id = team_id;
    this.members = members;
    this.reports = reports;
    this.discussions = discussions;
    this.comments = comments;
    this.lastChange = lastChange;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): TeamInfoDto {
    return new TeamInfoDto('', 0, 0, 0, 0, new Date());
  }

  static examples(): { [key: string]: { value: TeamInfoDto } } {
    return {
      TeamInfoDto: {
        value: TeamInfoDto.createEmpty(),
      },
    };
  }
}
