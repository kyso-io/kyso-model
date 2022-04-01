import { IsNotEmpty, IsString } from 'class-validator';

export class VerifyCaptchaRequestDto {
  @IsString()
  @IsNotEmpty()
  public token!: string;
}
