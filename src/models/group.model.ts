import { BaseModel } from "./base.model";
import { Group } from "../entity/group.entity";

export class GroupModel extends BaseModel<Group> {
  constructor() {
    super(Group);
  }

  async findByName(name: string): Promise<Group[]> {
    return this.repository.find({ where: { name } });
  }
}
