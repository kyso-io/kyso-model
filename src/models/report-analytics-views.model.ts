import { IsArray, IsObject } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class ReportAnalyticsViews extends BaseModel implements StaticImplements<ApiMethods<ReportAnalyticsViews>, typeof ReportAnalyticsViews> {
  @IsArray()
  public last_items: {
    timestamp: Date;
    user_id: string;
    location: string | null;
    device: any | null;
  }[];

  @IsArray()
  public locations: {
    location: string;
    coords: {
      lat: number;
      lng: number;
    } | null;
    count: number;
  }[];

  @IsObject()
  public devices: { [key: string]: number };

  @IsObject()
  public os: { [key: string]: number };

  @IsObject()
  public client: { [key: string]: number };

  constructor() {
    super();
    this.last_items = [];
    this.locations = [];
    this.devices = {};
    this.os = {};
    this.client = {};
  }

  validate(): boolean {
    return true;
  }

  static createEmpty(): ReportAnalyticsViews {
    return new ReportAnalyticsViews();
  }

  static examples(): { [key: string]: { value: ReportAnalyticsViews } } {
    return {
      Tag: {
        value: ReportAnalyticsViews.createEmpty(),
      },
    };
  }
}
