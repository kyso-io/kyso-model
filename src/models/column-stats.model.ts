import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';
import { ColumnValue } from './column-value.model';

export class ColumnStats extends BaseModel implements StaticImplements<ApiMethods<ColumnStats>, typeof ColumnStats> {
  public column: string;
  public values: ColumnValue[];

  constructor(column: string, values: any[]) {
    super();
    this.column = column;
    this.values = values;
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): ColumnStats {
    return new ColumnStats('', []);
  }

  static examples(): { [key: string]: { value: ColumnStats } } {
    return {
      FileStats: {
        value: ColumnStats.createEmpty(),
      },
    };
  }
}
