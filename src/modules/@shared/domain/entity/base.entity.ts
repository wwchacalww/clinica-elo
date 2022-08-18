import { Id } from "../../value-object/id.value-object";

export default class BaseEntity {
  private _id: Id;
  private _created_at: Date;
  private _updated_at: Date;

  constructor(id?: Id) {
    this._id = id || new Id();
    this._created_at = new Date();
    this._updated_at = new Date();
  }

  get id(): Id {
    return this._id;
  }

  get createdAt(): Date {
    return this._created_at;
  }

  get updatedAt(): Date {
    return this._updated_at;
  }

  set updatedAt(updatedAt: Date) {
    this._updated_at = updatedAt;
  }
}
