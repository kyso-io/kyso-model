import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class ColumnStats extends BaseModel implements StaticImplements<ApiMethods<ColumnStats>, typeof ColumnStats> {
  public column: string;
  public count: number;
  public maxValue: number;
  public minValue: number;
  public avgValue: number;
  public stdDev: number;
  public medianValue: number;
  public images: string[];

  constructor(column: string, count: number, maxValue: number, minValue: number, avgValue: number, stdDev: number, medianValue: number, images: string[]) {
    super();
    this.column = column;
    this.count = count;
    this.maxValue = maxValue;
    this.minValue = minValue;
    this.avgValue = avgValue;
    this.stdDev = stdDev;
    this.medianValue = medianValue;
    this.images = images;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): ColumnStats {
    return new ColumnStats('', 0, 0, 0, 0, 0, 0, []);
  }

  static examples(): { [key: string]: { value: ColumnStats } } {
    return {
      FileStats: {
        value: ColumnStats.createEmpty(),
      },
    };
  }
}
