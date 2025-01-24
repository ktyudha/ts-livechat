"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var provinces_1 = require("../controllers/provinces");
var router = express_1.default.Router();
exports.router = router;
router.get('/', provinces_1.getAllProvinces);
router.get('/provinceId/:provinceId', provinces_1.getProvinceById);
// router.post('/', [postRecord]);
router.stack.forEach(function (middleware) {
    if (middleware.route) {
        console.log('[routes]: ' + middleware.route.stack[0].method.toUpperCase() + ' /api/v1/provinces' + middleware.route.path);
    }
});
