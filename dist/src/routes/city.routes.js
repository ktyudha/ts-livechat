"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var city_1 = require("../controllers/city");
var router = express_1.default.Router();
exports.router = router;
router.get('/', city_1.getAllCity);
router.get('/cityId/:cityId', city_1.getCityById);
router.get('/provinceId/:provinceId', city_1.getCityByProvinceId);
// router.post('/', [postRecord]);
router.stack.forEach(function (middleware) {
    if (middleware.route) {
        console.log('[routes]: ' + middleware.route.stack[0].method.toUpperCase() + ' /api/v1/cities' + middleware.route.path);
    }
});
