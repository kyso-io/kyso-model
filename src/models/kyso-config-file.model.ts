import { IsString } from 'class-validator';

export class KysoConfigFile {
  @IsString()
  public main: string;

  @IsString()
  public title: string;

  @IsString()
  public description: string;

  @IsString()
  public organization: string;

  @IsString()
  public team: string;

  constructor(main: string, title: string, description: string, organization: string, team: string) {
    this.main = main;
    this.title = title;
    this.description = description;
    this.organization = organization;
    this.team = team;
  }
}
