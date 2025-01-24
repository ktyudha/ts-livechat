import { Request, Response } from "express";
import { UserModel } from "../../models/user.model";
import { plainToInstance } from "class-transformer";
import { CreateUserDto } from "../../dto/user/create-user.dto";
import message from "../../views/message";
import { validate } from "class-validator";

const userModel = new UserModel();
async function storeUser(req: Request, res: Response) {
  try {
    // Konversi request body menjadi instance DTO
    const userDto = plainToInstance(CreateUserDto, req.body);

    // Lakukan validasi
    const errors = await validate(userDto);
    if (errors.length > 0) {
      return res.status(400).json({
        message: "Validation errors",
        errors: errors.map((error) => ({
          property: error.property,
          constraints: error.constraints,
        })),
      });
    }

    // Simpan data ke database
    const user = await userModel.createUser(req.body);

    // Kirim respons
    return res.status(201).json(
      message({
        statusCode: 201,
        message: "success",
        data: user,
      })
    );
  } catch (error: any) {
    return res.status(500).json({
      message: "Error storing user",
      error: error.message || error,
    });
  }
}
export { storeUser };
