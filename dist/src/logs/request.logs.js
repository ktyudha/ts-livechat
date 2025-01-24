"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerInfo = void 0;
const winston_1 = __importDefault(require("winston"));
const LoggerInfo = winston_1.default.createLogger({
    format: winston_1.default.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston_1.default.transports.File({ filename: 'log/info.log', level: 'info' })
    ]
});
exports.LoggerInfo = LoggerInfo;
function requestLogger(req, res, next) {
    LoggerInfo.log('info', `${req.method} ${req.path} from ${req.ip} at ${new Date().toLocaleString()}`);
    next();
}
exports.default = requestLogger;
