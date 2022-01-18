import { ApiProperty } from '@nestjs/swagger';

export class Hateoas {
  @ApiProperty()
  public self_api: string;

  @ApiProperty()
  public self_ui: string;

  constructor(self_api: string, self_ui: string) {
    this.self_api = self_api;
    this.self_ui = self_ui;
  }
}
