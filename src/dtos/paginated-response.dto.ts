export interface PaginatedResponseDto<T> {
  currentPage: number;
  itemCount: number;
  itemsPerPage: number;
  results: T[];
  totalItems: number;
  totalPages: number;
}
