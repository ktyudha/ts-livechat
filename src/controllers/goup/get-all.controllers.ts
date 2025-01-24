import { Request, Response } from "express";
import { GroupModel } from "../../models/group.model";
import message from "../../views/message";

const model = new GroupModel();
async function getAll(req: Request, res: Response) {
  const data = await model.getAll(["users"]);

  const viewData = data.map((group) => ({
    id: group.id,
    name: group.name,
    countUser: group.users ? group.users.length : 0,
  }));

  return res.send(
    message({
      statusCode: 200,
      message: "success",
      data: viewData,
    })
  );
}
export { getAll };
