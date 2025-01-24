"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = exports.http = exports.app = void 0;
/* eslint-disable @typescript-eslint/no-var-requires */
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
exports.app = app;
const http = require('http').createServer(app);
exports.http = http;
dotenv_1.default.config();
const port = Number(process.env.PORT);
exports.port = port;
