import { Request, Response } from "express";
import { UserModel } from "../../models/user.model";
import message from "../../views/message";

const userModel = new UserModel();
async function getAllUser(req: Request, res: Response) {
  const users = await userModel.getAllUsers();
  return res.send(
    message({
      statusCode: 200,
      message: "Kota berhasil didapatkan",
      data: users,
    })
  );
}
export { getAllUser };
