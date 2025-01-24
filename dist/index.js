"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.http = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
require("express-async-errors");
const dotenv_1 = __importDefault(require("dotenv"));
const app_core_1 = __importDefault(require("./src/core/app.core"));
const http_core_1 = require("./src/core/http.core");
Object.defineProperty(exports, "http", { enumerable: true, get: function () { return http_core_1.http; } });
// import WebSocket from "./src/core/ws.core";
const routes_1 = __importDefault(require("./src/core/routes"));
const connect_database_1 = __importDefault(require("./src/databases/connect.database"));
// import {provinceAndCitiesInit} from './src/utils';
// import { initializeServices } from "./src/utils/initService";
dotenv_1.default.config();
(0, app_core_1.default)(http_core_1.app);
(0, routes_1.default)(http_core_1.app);
(0, connect_database_1.default)();
// WebSocket(app);
// initializeServices();
// provinceAndCitiesInit()
http_core_1.http.listen(http_core_1.port, () => console.log(`[server]: App is listening on port ${http_core_1.port}`));
