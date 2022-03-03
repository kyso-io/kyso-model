import { IsDateString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateKysoAccessTokenDto {
  @IsNotEmpty()
  public name: string;

  @IsOptional()
  @IsDateString()
  public expiration_date?: Date;

  constructor(name: string, expiration_date?: Date) {
    this.name = name;
    this.expiration_date = expiration_date;
  }
}
