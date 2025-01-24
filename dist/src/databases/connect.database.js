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
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
// Sesuaikan entitas yang digunakan
const user_entity_1 = require("../entity/user.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "3306"),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: true,
    entities: [user_entity_1.User],
    migrations: [],
    subscribers: [], // Jika menggunakan subscriber, sesuaikan
});
function connectDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Inisialisasi koneksi ke database
            yield exports.AppDataSource.initialize();
            console.log("[database]: Connected to MySQL");
        }
        catch (error) {
            console.error("Error during DataSource initialization:", error);
            throw new Error("Error: " + error);
        }
    });
}
exports.default = connectDatabase;
