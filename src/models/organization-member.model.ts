import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class OrganizationMember {
  @ApiModelProperty()
  public id: string;

  @ApiModelProperty()
  public nickname: string;

  @ApiModelProperty()
  public username: string;

  @ApiModelProperty()
  public organization_roles: string[];

  @ApiModelProperty()
  public bio: string;

  @ApiModelProperty()
  public avatar_url: string;

  @ApiModelProperty()
  public email: string;

  constructor(id: string, nickname: string, username: string, organization_roles: string[], bio: string, avatar_url: string, email: string) {
    this.id = id;
    this.nickname = nickname;
    this.username = username;
    this.organization_roles = organization_roles;
    this.bio = bio;
    this.avatar_url = avatar_url;
    this.email = email;
  }
}
