import { Comment } from '../models/comment.model';
import { Organization } from '../models/organization.model';
import { Report } from '../models/report.model';
import { Team } from '../models/team.model';
import { User } from '../models/user.model';

const MODELS = [User, Report, Comment, Team, Organization];

export class NormalizedResponse<T> {
  data: T;

  relations: any;

  constructor(data: any, relations?: any) {
    this.data = data;

    if (data?.buildHatoes) {
      data.buildHatoes(relations);
    }

    if (relations) {
      this.relations = relations;
    } else {
      this.relations = null;
    }
  }
}
