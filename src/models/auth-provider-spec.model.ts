import { IsNotEmpty, IsObject, } from 'class-validator';
import { LoginProviderEnum } from '../enums/login-provider.enum';

export class AuthProviderSpec {
  @IsNotEmpty()
  public type: LoginProviderEnum  

  @IsObject()
  @IsNotEmpty()
  public options: Object
  
  constructor(type: LoginProviderEnum, options: Object) { 
    this.type = type
    this.options = options
  }
}
