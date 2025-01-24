import { Request, Response } from "express";
import { UserModel } from "../../models/user.model";
import message from "../../views/message";

const userModel = new UserModel();
async function destroyUser(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await userModel.delete(id);
    return res.send(
      message({
        statusCode: 200,
        message: "success",
      })
    );
  } catch (error: any) {
    return res.status(500).json({
      message: "failed deleting user",
      error: error.message || error,
    });
  }
}
export { destroyUser };
