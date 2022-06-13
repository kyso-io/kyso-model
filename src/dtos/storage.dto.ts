export class StorageDto {
  public name: string;
  public consumedSpaceKb: number;
  public consumedSpaceMb: number;
  public consumedSpaceGb: number;
  constructor() {
    this.name = '';
    this.consumedSpaceKb = 0;
    this.consumedSpaceMb = 0;
    this.consumedSpaceGb = 0;
  }
}
