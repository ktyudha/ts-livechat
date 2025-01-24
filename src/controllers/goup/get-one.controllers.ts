import { Request, Response } from "express";
import { plainToClass } from "class-transformer";
import { Group } from "../../entity/group.entity";
import { GroupModel } from "../../models/group.model";
import message from "../../views/message";

const model = new GroupModel();
async function getOneById(req: Request, res: Response) {
  const { id } = req.params;
  const data = await model.findById(id, ["users"]);

  const viewData = plainToClass(Group, data);

  return res.send(
    message({
      statusCode: 200,
      message: "success",
      data: viewData,
    })
  );
}
export { getOneById };
