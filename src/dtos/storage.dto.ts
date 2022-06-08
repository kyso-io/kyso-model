export class StorageDto {
  public name: string;
  public consumed_space_kb: number;
  public consumed_space_mb: number;
  public consumed_space_gb: number;
  constructor() {
    this.name = '';
    this.consumed_space_kb = 0;
    this.consumed_space_mb = 0;
    this.consumed_space_gb = 0;
  }
}
