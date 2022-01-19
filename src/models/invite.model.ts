import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsMongoId, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';
import { BaseModel } from './base.model';

export class Invite extends BaseModel {
  @ApiProperty({ format: 'faker: lorem.sentance' })
  @IsNotEmpty()
  public role: string;

  @ApiProperty({ format: 'faker: datatype.uuid' })
  @IsOptional()
  @IsMongoId()
  public invited_by?: string;

  @ApiProperty({ format: 'faker: lorem.sentance' })
  @IsEmail()
  public email: string;

  @ApiProperty({ format: 'faker: datatype.uuid' })
  @IsMongoId()
  public team_id: string;

  @ApiProperty({ format: 'faker: datatype.boolean' })
  @IsBoolean()
  public accepted: boolean

  @ApiProperty({ format: 'faker: datatype.uuid' })
  @IsUUID()
  public code: string

  constructor(role: string, email: string, team_id: string, accepted: boolean, code: string, invited_by?: string) {
    super();
    this.role = role;
    this.email = email;
    this.team_id = team_id;
    this.accepted = accepted;
    this.code = code;
    
    if(invited_by) {
        this.invited_by = invited_by
    }
    
  }
}
