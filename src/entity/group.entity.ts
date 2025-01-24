import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { MinLength } from "class-validator";
import { Exclude } from "class-transformer";
import { User } from "./user.entity";

@Entity("groups")
export class Group {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  @MinLength(3)
  name!: string;

  @OneToMany(() => User, (user) => user.group)
  users!: User[];

  @CreateDateColumn()
  @Exclude()
  createdAt!: Date; // Di-set otomatis oleh TypeORM ketika data dibuat

  @UpdateDateColumn()
  @Exclude()
  updatedAt!: Date; // Di-set otomatis oleh TypeORM ketika data diperbarui
}
