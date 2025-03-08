import { Express } from "express";
import { UserRouter, GroupRouter, WebhookRouter } from "../routes";

export default function coreRoutes(app: Express) {
  app.use("/api/v1/users", [UserRouter]); // Users Routes
  app.use("/api/v1/groups", [GroupRouter]); // Users Routes
  app.use("/api/v1/webhook", [WebhookRouter]); // Webhook Routes
}
