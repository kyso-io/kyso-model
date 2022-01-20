import { IsNotEmpty } from 'class-validator';

export class TagRequestDTO {
  @IsNotEmpty()
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}
