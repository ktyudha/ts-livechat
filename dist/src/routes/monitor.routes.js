"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var monitoring_1 = require("../controllers/monitoring");
var router = express_1.default.Router();
exports.router = router;
router.get('/poolsId/:poolsId', monitoring_1.getAllMonitor);
router.get('/poolsId/:poolsId/today', monitoring_1.getAllMonitorToday);
router.get('/:recordId', monitoring_1.getOneMonitor);
router.post('/poolsId/:poolsId', [monitoring_1.postMonitor]);
router.post('/apiKey/:apiKey/deviceName/:deviceName', [monitoring_1.postMonitorByKey]);
router.put('/:recordId', [monitoring_1.updateMonitor]);
router.delete('/:recordId', [monitoring_1.deleteOneMonitor]);
router.stack.forEach(function (middleware) {
    if (middleware.route) {
        console.log('[routes]: ' + middleware.route.stack[0].method.toUpperCase() + ' /api/v1/monitor' + middleware.route.path);
    }
});
