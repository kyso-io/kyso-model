import { ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { Comment } from '../models/comment.model';
import { Organization } from '../models/organization.model';
import { Report } from '../models/report.model';
import { Team } from '../models/team.model';
import { User } from '../models/user.model';

const MODELS = [User, Report, Comment, Team, Organization];

export class NormalizedResponse {
  @ApiProperty({
    description: 'The specific data that has been requested, it is an array or object',
    example: 'a report, or list of reports',
    oneOf: [...MODELS.map(model => ({ $ref: getSchemaPath(model) })), ...MODELS.map(model => ({ type: 'array', items: { $ref: getSchemaPath(model) } }))],
  })
  data: any;

  @ApiProperty({
    description: 'object with all the fetched relations',
    anyOf: [...MODELS.map(model => ({ type: 'object', additionalProperties: { $ref: getSchemaPath(model) } }))],
  })
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
