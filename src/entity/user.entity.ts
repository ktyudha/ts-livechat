import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { IsEmail, MinLength } from "class-validator";
import { Exclude } from "class-transformer";
import { Group } from "./group.entity";
@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Group)
  group!: Group;

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
  @Exclude()
  createdAt!: Date; // Di-set otomatis oleh TypeORM ketika data dibuat

  @UpdateDateColumn()
  @Exclude()
  updatedAt!: Date; // Di-set otomatis oleh TypeORM ketika data diperbarui
}
