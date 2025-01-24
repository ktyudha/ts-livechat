"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("../routes");
function coreRoutes(app) {
    app.use("/api/v1/users", [routes_1.UserRouter]); // Users Routes
}
exports.default = coreRoutes;
