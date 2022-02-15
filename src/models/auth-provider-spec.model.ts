import { IsNotEmpty, IsObject, } from 'class-validator';
import { LoginProviderEnum } from '../enums/login-provider.enum';
import { PingIdSAMLSpec } from './auth-provider/pingid-saml-spec.model';

export class AuthProviderSpec {
  @IsNotEmpty()
  public type: LoginProviderEnum  

  @IsObject()
  @IsNotEmpty()
  public options: PingIdSAMLSpec | any
  
  constructor(type: LoginProviderEnum, options: PingIdSAMLSpec | any) { 
    this.type = type
    this.options = options
  }
}
