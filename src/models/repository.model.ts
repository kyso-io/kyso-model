import { ApiProperty } from '@nestjs/swagger';

export class Repository {
  @ApiProperty()
  public owner: string;

  @ApiProperty()
  public name: string;

  @ApiProperty()
  public full_name: string;

  @ApiProperty()
  public default_branch: string;

  @ApiProperty()
  public description: string;

  @ApiProperty()
  public is_private: boolean;

  @ApiProperty()
  public language: string;

  @ApiProperty()
  public pushed_at: Date;

  constructor(owner: string, name: string, full_name: string, default_branch: string, description: string, is_private: boolean, language: string, pushed_at: Date) {
    this.owner = owner;
    this.name = name;
    this.full_name = full_name;
    this.default_branch = default_branch;
    this.description = description;
    this.is_private = is_private;
    this.language = language;
    this.pushed_at = pushed_at;
  }
}
