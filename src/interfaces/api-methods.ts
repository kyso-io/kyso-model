export interface ApiMethods<T> {
  new (...args: any[]): T;
  createEmpty(): T;
  examples(): { [key: string]: { value: T } };
}
