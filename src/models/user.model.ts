import { AppDataSource } from "../databases/connect.database";
import { User } from "../entity/user.entity"; // import entitas User

export class UserModel {
  private userRepository = AppDataSource.getRepository(User);

  // Menyimpan data pengguna baru
  async createUser(data: Partial<User>) {
    const user = this.userRepository.create(data);
    await this.userRepository.save(user);
    return user;
  }

  // Mencari semua pengguna
  async getAllUsers() {
    return this.userRepository.find();
  }

  // Mencari pengguna berdasarkan id
  async getUserById(id: number) {
    return this.userRepository.findOneOrFail({ where: { id } });
  }

  // Memperbarui pengguna berdasarkan id
  async updateUser(id: number, data: Partial<User>) {
    await this.userRepository.update(id, data);
    return this.userRepository.findOne({ where: { id } });
  }

  // Menghapus pengguna berdasarkan id
  async deleteUser(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (user) {
      await this.userRepository.remove(user);
    }
    return user;
  }
}
