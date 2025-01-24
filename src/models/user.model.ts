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
  async getUserById(id: string) {
    return this.userRepository.findOneOrFail({ where: { id: id.toString() } });
  }

  // Memperbarui pengguna berdasarkan id
  async updateUser(id: string, data: Partial<User>) {
    await this.userRepository.update(id, data);
    return this.userRepository.findOne({ where: { id: id.toString() } });
  }

  // Menghapus pengguna berdasarkan id
  async deleteUser(id: string) {
    const user = await this.userRepository.findOne({
      where: { id: id.toString() },
    });
    if (user) {
      await this.userRepository.remove(user);
    }
    return user;
  }
}
