import express from "express";
import { destroy, edit, getAll, getOneById, store } from "../controllers/goup";
const router = express.Router();

router.post("/", store);
router.get("/", getAll);
router.get("/:id", getOneById);
router.put("/:id", edit);
router.delete("/:id", destroy);

export { router };
