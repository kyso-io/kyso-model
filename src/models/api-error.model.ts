
export class ApiError {
  public statusCode: number;

  public message: string;

  public error: string;

  constructor(statusCode: number, message: string, error: string) {
    this.statusCode = statusCode;
    this.message = message;
    this.error = error;
  }
}
