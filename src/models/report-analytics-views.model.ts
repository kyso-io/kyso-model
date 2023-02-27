import { IsArray, IsInt, IsObject, Min } from '@nestjs/class-validator';
import { ApiMethods } from '../interfaces/api-methods';
import { DeviceDetector } from '../interfaces/device-detector';
import { StaticImplements } from '../types/static-implements';
import { BaseModel } from './base.model';

export class ReportAnalyticsViews extends BaseModel implements StaticImplements<ApiMethods<ReportAnalyticsViews>, typeof ReportAnalyticsViews> {
  @IsInt()
  @Min(0)
  public count: number;

  @IsArray()
  public last_items: {
    timestamp: Date;
    user_id: string;
    location: string | null;
    device: DeviceDetector | null;
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
    this.count = 0;
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
