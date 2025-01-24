import { Request, Response } from "express";
import { UserModel } from "../../models/user.model";
import message from "../../views/message";

const userModel = new UserModel();
async function getUserById(req: Request, res: Response) {
  const { id } = req.params;
  const data = await userModel.findById(id, ["group"]);

  const viewData = {
    id: data.id,
    name: data.name,
    username: data.username,
    email: data.email,
    group: {
      id: data.group.id,
      name: data.group.name,
    },
  };

  return res.send(
    message({
      statusCode: 200,
      message: "success",
      data: viewData,
    })
  );
}
export { getUserById };
