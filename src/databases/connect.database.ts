import { DataSource } from "typeorm";

// Sesuaikan entitas yang digunakan
import { User } from "../entity/user.entity";
import { Group } from "../entity/group.entity";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "3306"),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: true, // Log query yang dijalankan
  entities: [Group, User], // Entitas yang digunakan
  migrations: [], // Sesuaikan jika menggunakan migrasi
  subscribers: [], // Jika menggunakan subscriber, sesuaikan
});

export default async function connectDatabase() {
  try {
    // Inisialisasi koneksi ke database
    await AppDataSource.initialize();
    console.log("[database]: Connected to MySQL");
  } catch (error) {
    console.error("Error during DataSource initialization:", error);
    throw new Error("Error: " + error);
  }
}
