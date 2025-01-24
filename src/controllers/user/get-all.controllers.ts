import { Request, Response } from "express";
import { plainToClass } from "class-transformer";
import { UserModel } from "../../models/user.model";
import message from "../../views/message";
import { User } from "../../entity/user.entity";

const userModel = new UserModel();
async function getAllUser(req: Request, res: Response) {
  const users = await userModel.getAll(["group"]);
  const viewData = plainToClass(User, users);

  return res.send(
    message({
      statusCode: 200,
      message: "success",
      data: viewData,
    })
  );
}
export { getAllUser };
