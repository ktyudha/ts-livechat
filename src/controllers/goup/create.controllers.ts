import { Request, Response } from "express";
import { GroupModel } from "../../models/group.model";
import { plainToInstance } from "class-transformer";
import { CreateGroupDto } from "../../dto/group/create-group.dto";
import message from "../../views/message";
import { validate } from "class-validator";

const model = new GroupModel();
async function store(req: Request, res: Response) {
  try {
    const dto = plainToInstance(CreateGroupDto, req.body);

    const errors = await validate(dto);
    if (errors.length > 0) {
      return res.status(400).json({
        message: "Validation errors",
        errors: errors.map((error) => ({
          property: error.property,
          constraints: error.constraints,
        })),
      });
    }

    const data = await model.create(req.body);

    return res.status(201).json(
      message({
        statusCode: 201,
        message: "success",
        data: data,
      })
    );
  } catch (error: any) {
    return res.status(500).json({
      message: "Server error",
      error: error.message || error,
    });
  }
}
export { store };
