export class NormalizedResponseDTO<T> {
  data: T;

  relations: any;

  constructor(data: any, relations?: any) {
    this.data = data;

    if (data?.buildHatoes) {
      data.buildHatoes(relations);
    }

    if (relations) {
      this.relations = relations;
    } else {
      this.relations = null;
    }
  }
}
