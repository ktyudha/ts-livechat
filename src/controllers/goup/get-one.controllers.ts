import { Request, Response } from "express";
import { GroupModel } from "../../models/group.model";
import message from "../../views/message";

const model = new GroupModel();
async function getOneById(req: Request, res: Response) {
  const { id } = req.params;
  const data = await model.findById(id);
  return res.send(
    message({
      statusCode: 200,
      message: "success",
      data: data,
    })
  );
}
export { getOneById };
