import { IsArray, IsEnum, IsMongoId, IsNotEmpty, IsOptional, IsString } from '@nestjs/class-validator';
import { RepositoryProvider } from '../enums/repository-provider.enum';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';
import { TableOfContentEntryDto } from './table-of-content-entry.dto';

export class CreateReportDTO extends BaseDto implements StaticImplements<ApiMethods<CreateReportDTO>, typeof CreateReportDTO> {
  public id?: string;

  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsEnum(RepositoryProvider)
  public provider: RepositoryProvider;

  @IsString()
  @IsNotEmpty()
  public username_provider: string;

  @IsString()
  @IsNotEmpty()
  public default_branch: string;

  @IsString()
  @IsNotEmpty()
  public path: string;

  @IsMongoId()
  public team_id: string;

  @IsString()
  @IsNotEmpty()
  public title: string;

  @IsString()
  public description: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public main_file: string;

  @IsOptional()
  @IsString()
  public type: string;

  @IsArray()
  public toc: TableOfContentEntryDto[];

  constructor(
    name: string,
    username_provider: string,
    provider: RepositoryProvider,
    default_branch: string,
    path: string,
    team_id: string,
    title: string,
    description: string,
    main_file: string,
    type: string,
    toc: TableOfContentEntryDto[],
    id?: string,
  ) {
    super();
    this.name = name;
    this.username_provider = username_provider;
    this.provider = provider;
    this.default_branch = default_branch;
    this.path = path;
    this.team_id = team_id;
    this.title = title;
    this.description = description;
    this.main_file = main_file;
    this.type = type;
    this.toc = toc;
    this.id = id;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): CreateReportDTO {
    return new CreateReportDTO('', '', RepositoryProvider.GITHUB, '', '', '', '', '', '', '', []);
  }

  static examples(): { [key: string]: { value: CreateReportDTO } } {
    return {
      CreateReportDTO: {
        value: CreateReportDTO.createEmpty(),
      },
    };
  }
}
