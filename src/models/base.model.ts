import { Repository, DeepPartial, FindOptionsWhere } from "typeorm";
import { AppDataSource } from "../databases/connect.database";

export class BaseModel<T extends { id: string }> {
  protected repository: Repository<T>;

  constructor(entity: { new (): T }) {
    this.repository = AppDataSource.getRepository(entity);
  }

  async create(data: DeepPartial<T>): Promise<T> {
    const entity = this.repository.create(data);
    return this.repository.save(entity);
  }

  async getAll(relations?: string[]): Promise<T[]> {
    return this.repository.find({ relations });
  }

  async findById(id: string, relations?: string[]): Promise<T> {
    return this.repository.findOneOrFail({
      where: { id } as FindOptionsWhere<T>,
      relations: relations,
    });
  }
  async update(id: string, data: any): Promise<T | null> {
    await this.repository.update(id, data); // This works with DeepPartial<T>
    return this.repository.findOne({ where: { id } as FindOptionsWhere<T> });
  }

  async delete(id: string): Promise<T | null> {
    const entity = await this.repository.findOne({
      where: { id } as FindOptionsWhere<T>,
    });
    if (entity) {
      await this.repository.remove(entity);
    }
    return entity;
  }
}
