export class BaseDTO {
  public id?: string;

  constructor(id?: string) {
    if(id) {
      this.id = id;
    }
  }
}
