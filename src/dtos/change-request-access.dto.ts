import { IsNotEmpty, IsString } from '@nestjs/class-validator';
import { RequestAccessStatusEnum } from '../enums/request-access-status.enum';
import { ApiMethods } from '../interfaces/api-methods';
import { StaticImplements } from '../types/static-implements';
import { BaseDto } from './base.dto';

export class ChangeRequestAccessDTO extends BaseDto implements StaticImplements<ApiMethods<ChangeRequestAccessDTO>, typeof ChangeRequestAccessDTO> {
  @IsString()
  @IsNotEmpty()
  public secret: string;

  @IsString()
  @IsNotEmpty()
  public role: string;

  @IsNotEmpty()
  @IsString()
  public new_status: RequestAccessStatusEnum;

  constructor(secret: string, role: string, new_status: RequestAccessStatusEnum) {
    super();
    this.secret = secret;
    this.role = role;
    this.new_status = new_status;
  }

  validate(): boolean {
    return this.role === 'team-reader' || this.role === 'team-contributor';
  }

  static createEmpty(): ChangeRequestAccessDTO {
    return new ChangeRequestAccessDTO('', '', RequestAccessStatusEnum.PENDING);
  }

  static examples(): { [key: string]: { value: ChangeRequestAccessDTO } } {
    return {
      SearchUserDto: {
        value: ChangeRequestAccessDTO.createEmpty(),
      },
    };
  }
}
