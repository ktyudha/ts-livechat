import express from "express";
import {
  getAllUser,
  getUserById,
  storeUser,
  destroyUser,
  editUser,
} from "../controllers/user";
const router = express.Router();

router.post("/", storeUser);
router.get("/", getAllUser);
router.get("/:id", getUserById);
router.put("/:id", editUser);
router.delete("/:id", destroyUser);

export { router };
