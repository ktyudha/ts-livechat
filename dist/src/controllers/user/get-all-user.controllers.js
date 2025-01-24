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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUser = void 0;
const user_model_1 = require("../../models/user.model");
const message_1 = __importDefault(require("../../views/message"));
const userModel = new user_model_1.UserModel();
function getAllUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield userModel.getAllUsers();
        return res.send((0, message_1.default)({
            statusCode: 200,
            message: "Kota berhasil didapatkan",
            data: users,
        }));
    });
}
exports.getAllUser = getAllUser;
