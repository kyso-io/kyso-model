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

  @IsString()
  public importPath: string;

  constructor(main: string, title: string, description: string, organization: string, team: string, importPath: string) {
    this.main = main;
    this.title = title;
    this.description = description;
    this.organization = organization;
    this.team = team;
    this.importPath = importPath;
  }

  static isValid(data: any): boolean {
    return (
      data?.main &&
      data.main.length > 0 &&
      data?.title &&
      data.title.length > 0 &&
      data?.description &&
      data.description.length > 0 &&
      data?.organization &&
      data.organization.length > 0 &&
      data?.team &&
      data.team.length > 0 &&
      data?.importPath &&
      data.importPath.length > 0
    );
  }
}
