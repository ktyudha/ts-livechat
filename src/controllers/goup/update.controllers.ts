import { Request, Response } from "express";
import { GroupModel } from "../../models/group.model";
import message from "../../views/message";

const model = new GroupModel();
async function edit(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const data = await model.update(id, req.body);

    if (!data) {
      return res.status(404).json({ message: "Data Not found" });
    }

    return res.send(
      message({
        statusCode: 200,
        message: "success",
        data: data,
      })
    );
  } catch (error: any) {
    return res.status(500).json({
      message: "Failed Update",
      error: error.message || error,
    });
  }
}
export { edit };
