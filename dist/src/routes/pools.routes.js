"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var pools_1 = require("../controllers/pools");
var router = express_1.default.Router();
exports.router = router;
router.get('/', pools_1.getAllPools);
router.get('/poolsId/:poolsId', pools_1.getPoolsById);
router.get('/pondsId/:pondsId', pools_1.getPoolsByPondsId);
router.get('/pondsIdAdmin/:pondsId', pools_1.getPoolsByPondsIdAdmin);
router.get('/cityId/:cityId', pools_1.getPoolsByCityId);
router.get('/provinceId/:provinceId', pools_1.getPoolsByProvinceId);
router.post('/', [pools_1.createPoolsByUser]);
router.put('/poolsId/:poolsId', [pools_1.updatePoolByUser]);
router.put('/bind/poolsId/:poolsId', [pools_1.bindPoolsWithDevice]);
router.delete('/poolsId/:poolsId', [pools_1.deletePoolsById]);
router.stack.forEach(function (middleware) {
    if (middleware.route) {
        console.log('[routes]: ' + middleware.route.stack[0].method.toUpperCase() + ' /api/v1/pools' + middleware.route.path);
    }
});
