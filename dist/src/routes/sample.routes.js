"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var sampling_1 = require("../controllers/sampling");
var router = express_1.default.Router();
exports.router = router;
router.get('/poolsId/:poolsId', sampling_1.getAllSample);
router.get('/poolsId/:poolsId/today', sampling_1.getAllSampleToday);
router.get('/:recordId', sampling_1.getOneSample);
router.post('/poolsId/:poolsId', [sampling_1.postSample]);
router.post('/apiKey/:apiKey/deviceName/:deviceName', [sampling_1.postSampleByKey]);
router.put('/:recordId', [sampling_1.updateSample]);
router.delete('/:recordId', [sampling_1.deleteOneSample]);
router.stack.forEach(function (middleware) {
    if (middleware.route) {
        console.log('[routes]: ' + middleware.route.stack[0].method.toUpperCase() + ' /api/v1/sample' + middleware.route.path);
    }
});
