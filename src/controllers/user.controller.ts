import { Request, Response } from "express";
import { UserModel } from "../models/user.model"; // Impor UserModel

class UserController {
  private userModel = new UserModel();

  // Menyimpan data pengguna baru
  async createUser(req: Request, res: Response) {
    try {
      const user = await this.userModel.createUser(req.body);
      return res.status(201).json(user); // Mengembalikan user yang baru dibuat
    } catch (error) {
      return res.status(500).json({ message: "Error creating user", error });
    }
  }

  // Mendapatkan semua pengguna
  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await this.userModel.getAllUsers();
      return res.status(200).json(users); // Respond with users
    } catch (error) {
      return res.status(500).json({ message: "Error fetching users", error });
    }
  }

  // Mendapatkan pengguna berdasarkan id
  async getUserById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await this.userModel.getUserById(id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json(user); // Mengembalikan pengguna berdasarkan id
    } catch (error) {
      return res.status(500).json({ message: "Error fetching user", error });
    }
  }

  // Memperbarui pengguna berdasarkan id
  async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const updatedUser = await this.userModel.updateUser(id, req.body);
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json(updatedUser); // Mengembalikan pengguna yang sudah diperbarui
    } catch (error) {
      return res.status(500).json({ message: "Error updating user", error });
    }
  }

  // Menghapus pengguna berdasarkan id
  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await this.userModel.deleteUser(id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json({ message: "User deleted successfully" }); // Mengembalikan pesan sukses
    } catch (error) {
      return res.status(500).json({ message: "Error deleting user", error });
    }
  }
}

export { UserController };
