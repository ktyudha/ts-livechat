"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppLogger = void 0;
const winston_1 = __importDefault(require("winston"));
function errorHandler(err, req, res, next) {
    AppLogger.error(err.message);
    res.status(500).send('Something failed');
}
const AppLogger = winston_1.default.createLogger({
    format: winston_1.default.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [new winston_1.default.transports.File({ filename: 'log/error.log', level: 'error' })]
});
exports.AppLogger = AppLogger;
exports.default = errorHandler;
