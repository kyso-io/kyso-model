import { Validate } from '../interfaces/validate';

export abstract class BaseDto implements Validate {
  public abstract validate(): boolean;
}
