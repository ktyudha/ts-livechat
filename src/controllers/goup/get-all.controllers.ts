import { Request, Response } from "express";
import { GroupModel } from "../../models/group.model";
import message from "../../views/message";

const model = new GroupModel();
async function getAll(req: Request, res: Response) {
  const data = await model.getAll();
  return res.send(
    message({
      statusCode: 200,
      message: "success",
      data: data,
    })
  );
}
export { getAll };
