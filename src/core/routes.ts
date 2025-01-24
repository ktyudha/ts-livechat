import { Express } from "express";
import { UserRouter } from "../routes";

export default function coreRoutes(app: Express) {
  app.use("/api/v1/users", [UserRouter]); // Users Routes
}
