export class ActionWithPayload<T> {
  public payload: T | null;

  constructor(payload: T) {
    this.payload = payload;
  }
}
