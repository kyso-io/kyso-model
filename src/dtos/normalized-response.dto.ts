import { BaseModel } from '../models/base.model';
import { Relations } from '../models/relations.model';

export class NormalizedResponseDTO<T> {
  data: T;

  relations: Relations | null;

  constructor(data: BaseModel | BaseModel[] | any, relations?: Relations | undefined) {
    this.data = data;
    if (Array.isArray(data)) {
      if (data[0]) {
        // We assume that all the objects in the array are of the same type...
        if (data[0] instanceof BaseModel) {
          data.map((x) => x.buildHatoes(relations));
        }
      }
    } else if (data instanceof BaseModel) {
      data.buildHatoes(relations);
    }

    if (!relations) {
      this.relations = null;
      return;
    }

    if (relations) {
      this.relations = relations;
    } else {
      this.relations = {};
    }

    const keys: string[] = Object.keys(relations);

    this.relations = keys.reduce((prev: Relations, key) => {
      if (!relations[key]) return prev;
      const collection: any = relations[key];
      const ids = Object.keys(collection);

      prev[key] = ids.reduce((last: any, id: string) => {
        const model = collection[id];
        if (model instanceof BaseModel) {
          model.buildHatoes(relations);
        }

        last[id] = model;
        return last;
      }, {});

      return prev;
    }, {} as Relations);
  }
}
