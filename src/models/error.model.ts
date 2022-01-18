import { ApiProperty } from '@nestjs/swagger';

export class Error {
  @ApiProperty()
  public error: string;

  constructor(error: string) {
    this.error = error;
  }
}
