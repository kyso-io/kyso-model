export class BatchReportCreation {
  status: string;
  reason: string | null;

  constructor(status: string, reason: string | null) {
    this.status = status;
    this.reason = reason;
  }
}
