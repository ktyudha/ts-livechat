import { Request, Response } from "express";
import { UserModel } from "../../models/user.model";
import message from "../../views/message";

const userModel = new UserModel();
async function editUser(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const updatedUser = await userModel.updateUser(id, req.body);

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.send(
      message({
        statusCode: 200,
        message: "success",
        data: updatedUser,
      })
    );
  } catch (error: any) {
    return res.status(500).json({
      message: "failed deleting user",
      error: error.message || error,
    });
  }
}
export { editUser };
