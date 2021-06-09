"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
var BaseService = /** @class */ (function () {
    function BaseService() {
    }
    BaseService.prototype.sendResponse = function (responseToSend, res) {
        res.json(responseToSend);
    };
    BaseService.prototype.sendValidationError = function (errorToSend, res) {
        res.json(errorToSend);
    };
    return BaseService;
}());
exports.BaseService = BaseService;
