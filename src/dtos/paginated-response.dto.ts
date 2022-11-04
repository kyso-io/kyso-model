import { ApiMethods } from '../interfaces/api-methods';
import { BaseModel } from '../models/base.model';
import { StaticImplements } from '../types/static-implements';

export class PaginatedResponseDto<T> extends BaseModel implements StaticImplements<ApiMethods<PaginatedResponseDto<T>>, typeof PaginatedResponseDto> {
  public currentPage: number;
  public itemCount: number;
  public itemsPerPage: number;
  public results: T[];
  public totalItems: number;
  public totalPages: number;

  constructor(currentPage: number, itemCount: number, itemsPerPage: number, results: T[], totalItems: number, totalPages: number) {
    super();
    this.currentPage = currentPage;
    this.itemCount = itemCount;
    this.itemsPerPage = itemsPerPage;
    this.results = results;
    this.totalItems = totalItems;
    this.totalPages = totalPages;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty<T>(): PaginatedResponseDto<T> {
    return new PaginatedResponseDto(0, 0, 0, [], 0, 0);
  }

  static examples<T>(): { [key: string]: { value: PaginatedResponseDto<T> } } {
    return {
      PaginatedResponseDto: {
        value: PaginatedResponseDto.createEmpty(),
      },
    };
  }
}
