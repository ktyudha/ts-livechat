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
exports.UserModel = void 0;
const connect_database_1 = require("../databases/connect.database");
const user_entity_1 = require("../entity/user.entity"); // import entitas User
class UserModel {
    constructor() {
        this.userRepository = connect_database_1.AppDataSource.getRepository(user_entity_1.User);
    }
    // Menyimpan data pengguna baru
    createUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = this.userRepository.create(data);
            yield this.userRepository.save(user);
            return user;
        });
    }
    // Mencari semua pengguna
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userRepository.find();
        });
    }
    // Mencari pengguna berdasarkan id
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userRepository.findOneOrFail({ where: { id } });
        });
    }
    // Memperbarui pengguna berdasarkan id
    updateUser(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userRepository.update(id, data);
            return this.userRepository.findOne({ where: { id } });
        });
    }
    // Menghapus pengguna berdasarkan id
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne({ where: { id } });
            if (user) {
                yield this.userRepository.remove(user);
            }
            return user;
        });
    }
}
exports.UserModel = UserModel;
