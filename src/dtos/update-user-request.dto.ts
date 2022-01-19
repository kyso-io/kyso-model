import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateUserRequest {
  @ApiModelProperty()
  @IsOptional()
  @IsNotEmpty()
  public nickname: string;

  @ApiModelProperty()
  @IsOptional()
  @IsString()
  public bio: string;

  @ApiModelProperty()
  @IsOptional()
  @IsString()
  public accessToken: string;

  constructor(nickname: string, bio: string, accessToken: string) {
    this.nickname = nickname;
    this.bio = bio;
    this.accessToken = accessToken;
  }
}
