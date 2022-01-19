import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

import { IsString } from 'class-validator';

export class UpdateReportRequest {
  @ApiModelProperty({
    required: false,
  })
  @IsString()
  location: string;

  @ApiModelProperty({
    required: false,
  })
  @IsString()
  link: string;

  @ApiModelProperty({
    required: false,
  })
  @IsString()
  bio: string;

  constructor(location: string, link: string, bio: string) {
    this.location = location;
    this.link = link;
    this.bio = bio;
  }
}
