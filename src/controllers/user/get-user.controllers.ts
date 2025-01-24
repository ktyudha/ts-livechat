import { Request, Response } from "express";
import { UserModel } from "../../models/user.model";
import message from "../../views/message";

const userModel = new UserModel();
async function getUserById(req: Request, res: Response) {
  const { id } = req.params;
  const users = await userModel.getUserById(id);
  return res.send(
    message({
      statusCode: 200,
      message: "success",
      data: users,
    })
  );
}
export { getUserById };
