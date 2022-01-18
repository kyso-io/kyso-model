import { ApiProperty } from '@nestjs/swagger';

export class Branch {
  @ApiProperty()
  public name: string;

  @ApiProperty()
  public commit: string;

  @ApiProperty()
  public is_default: boolean;

  constructor(name: string, commit: string, is_default: boolean) {
    this.name = name;
    this.commit = commit;
    this.is_default = is_default;
  }
}
