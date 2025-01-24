import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { IsEmail, MinLength } from "class-validator";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @MinLength(3)
  name!: string;

  @Column({ unique: true })
  @MinLength(3)
  username!: string;

  @Column()
  @MinLength(5)
  password!: string;

  @Column({ unique: true })
  @IsEmail()
  email!: string;

  @CreateDateColumn()
  createdAt!: Date; // Di-set otomatis oleh TypeORM ketika data dibuat

  @UpdateDateColumn()
  updatedAt!: Date; // Di-set otomatis oleh TypeORM ketika data diperbarui
}
