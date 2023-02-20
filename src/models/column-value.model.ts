import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class ColumnValue extends BaseModel implements StaticImplements<ApiMethods<ColumnValue>, typeof ColumnValue> {
  public key: number;
  public count: number;
  public uniqueValues: number;
  public maxValue: number;
  public minValue: number;
  public avgValue: number;
  public stdDev: number;

  constructor(key: number, count: number, uniqueValues: number, maxValue: number, minValue: number, avgValue: number, stdDev: number) {
    super();
    this.key = key;
    this.count = count;
    this.uniqueValues = uniqueValues;
    this.maxValue = maxValue;
    this.minValue = minValue;
    this.avgValue = avgValue;
    this.stdDev = stdDev;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): ColumnValue {
    return new ColumnValue(0, 0, 0, 0, 0, 0, 0);
  }

  static examples(): { [key: string]: { value: ColumnValue } } {
    return {
      FileStats: {
        value: ColumnValue.createEmpty(),
      },
    };
  }
}
