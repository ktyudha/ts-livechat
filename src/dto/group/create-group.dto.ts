import { MinLength } from "class-validator";

export class CreateGroupDto {
  @MinLength(3, { message: "Name must be at least 3 characters long" })
  name!: string;
}
