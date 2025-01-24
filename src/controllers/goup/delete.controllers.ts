import { Request, Response } from "express";
import { GroupModel } from "../../models/group.model";
import message from "../../views/message";

const model = new GroupModel();
async function destroy(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await model.delete(id);
    return res.send(
      message({
        statusCode: 200,
        message: "success",
      })
    );
  } catch (error: any) {
    return res.status(500).json({
      message: "Failed deleting",
      error: error.message || error,
    });
  }
}
export { destroy };
