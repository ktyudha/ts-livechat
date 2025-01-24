import express from "express";
import { getAllUser } from "../controllers/user";
const router = express.Router();

router.get("/", getAllUser);

export { router };
