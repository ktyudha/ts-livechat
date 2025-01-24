import { BaseModel } from "./base.model";
import { User } from "../entity/user.entity";

export class UserModel extends BaseModel<User> {
  constructor() {
    super(User);
  }

  async findByName(name: string): Promise<User[]> {
    return this.repository.find({ where: { name } });
  }
}
