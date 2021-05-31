"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseServices = void 0;
var BaseServices = /** @class */ (function () {
    function BaseServices() {
    }
    BaseServices.prototype.sendResponse = function (responseToSend, res) {
        res.json(responseToSend);
    };
    BaseServices.prototype.sendValidationError = function (errorToSend, res) {
        res.sendStatus(400);
        res.json(errorToSend);
    };
    return BaseServices;
}());
exports.BaseServices = BaseServices;
