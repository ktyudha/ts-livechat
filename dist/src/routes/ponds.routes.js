"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var ponds_1 = require("../controllers/ponds");
var router = express_1.default.Router();
exports.router = router;
router.get('/', ponds_1.getAllPonds);
router.get('/all-ponds', ponds_1.getAllNoQueryPonds);
router.get('/pondsId/:pondsId', ponds_1.getPondsById);
router.get('/cityId/:cityId', ponds_1.getPondsByCityId);
router.get('/provinceId/:provinceId', ponds_1.getPondsByProvinceId);
router.post('/', [ponds_1.createPondsByUser]);
router.put('/pondsId/:pondsId', [ponds_1.updatePondsByUser]);
router.delete('/pondsId/:pondsId', ponds_1.deletePondsById);
router.stack.forEach(function (middleware) {
    if (middleware.route) {
        console.log('[routes]: ' + middleware.route.stack[0].method.toUpperCase() + ' /api/v1/ponds' + middleware.route.path);
    }
});
