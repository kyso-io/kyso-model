import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class OrganizationMemberJoin {
  @ApiModelProperty()
  public organization_id: string;

  @ApiModelProperty()
  public member_id: string;

  @ApiModelProperty()
  public role_names: string[];

  @ApiModelProperty()
  public active: boolean;

  @ApiModelProperty()
  public id: string | null;

  constructor(organization_id: string, member_id: string, role_names: string[], active: boolean, id?: string) {
    this.organization_id = organization_id;
    this.member_id = member_id;
    this.role_names = role_names;
    this.active = active;

    if (id) {
      this.id = id;
    } else {
      this.id = null;
    }
  }
}
