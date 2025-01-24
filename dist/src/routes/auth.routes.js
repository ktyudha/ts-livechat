"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var auth_1 = require("../controllers/auth");
var router = express_1.default.Router();
exports.router = router;
router.post('/register', auth_1.register);
router.post('/login', auth_1.login);
router.stack.forEach(function (middleware) {
    if (middleware.route) {
        console.log('[routes]: ' + middleware.route.stack[0].method.toUpperCase() + ' /api/v1/auth' + middleware.route.path);
    }
});
