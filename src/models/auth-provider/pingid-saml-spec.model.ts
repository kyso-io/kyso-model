import { IsNotEmpty,  IsString, IsUrl, } from 'class-validator';

export class PingIdSAMLSpec {
  @IsNotEmpty()
  @IsUrl()
  public sso_url: string  

  @IsString()
  @IsNotEmpty()
  public environment_code: string

  @IsString()
  @IsNotEmpty()
  public sp_entity_id: string
  
  constructor(sso_url: string, environment_code: string, sp_entity_id: string) { 
    this.sso_url = sso_url
    this.environment_code = environment_code
    this.sp_entity_id = sp_entity_id
  }
}
