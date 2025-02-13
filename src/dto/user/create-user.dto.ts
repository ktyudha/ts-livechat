import { IsEmail, MinLength, IsUUID } from "class-validator";

export class CreateUserDto {
  @MinLength(3, { message: "Name must be at least 3 characters long" })
  name!: string;

  @MinLength(3, { message: "Username must be at least 3 characters long" })
  username!: string;

  @MinLength(5, { message: "Password must be at least 5 characters long" })
  password!: string;

  @IsEmail({}, { message: "Email must be valid" })
  email!: string;

  @IsUUID("4", { message: "Group ID must be a valid UUID" }) // Validasi UUID untuk groupId
  groupId!: string;
}
