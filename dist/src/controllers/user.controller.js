"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_model_1 = require("../models/user.model"); // Impor UserModel
class UserController {
    constructor() {
        this.userModel = new user_model_1.UserModel();
    }
    // Menyimpan data pengguna baru
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userModel.createUser(req.body);
                return res.status(201).json(user); // Mengembalikan user yang baru dibuat
            }
            catch (error) {
                return res.status(500).json({ message: "Error creating user", error });
            }
        });
    }
    // Mendapatkan semua pengguna
    getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.userModel.getAllUsers();
                return res.status(200).json(users); // Respond with users
            }
            catch (error) {
                return res.status(500).json({ message: "Error fetching users", error });
            }
        });
    }
    // Mendapatkan pengguna berdasarkan id
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const user = yield this.userModel.getUserById(Number(id));
                if (!user) {
                    return res.status(404).json({ message: "User not found" });
                }
                return res.status(200).json(user); // Mengembalikan pengguna berdasarkan id
            }
            catch (error) {
                return res.status(500).json({ message: "Error fetching user", error });
            }
        });
    }
    // Memperbarui pengguna berdasarkan id
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const updatedUser = yield this.userModel.updateUser(Number(id), req.body);
                if (!updatedUser) {
                    return res.status(404).json({ message: "User not found" });
                }
                return res.status(200).json(updatedUser); // Mengembalikan pengguna yang sudah diperbarui
            }
            catch (error) {
                return res.status(500).json({ message: "Error updating user", error });
            }
        });
    }
    // Menghapus pengguna berdasarkan id
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const user = yield this.userModel.deleteUser(Number(id));
                if (!user) {
                    return res.status(404).json({ message: "User not found" });
                }
                return res.status(200).json({ message: "User deleted successfully" }); // Mengembalikan pesan sukses
            }
            catch (error) {
                return res.status(500).json({ message: "Error deleting user", error });
            }
        });
    }
}
exports.UserController = UserController;
