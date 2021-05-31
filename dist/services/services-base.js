"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseServices = void 0;
var BaseServices = /** @class */ (function () {
    function BaseServices() {
    }
    BaseServices.prototype.sendResponse = function (responseToSend, res) {
        console.log("here");
        res.json(responseToSend);
    };
    BaseServices.prototype.sendValidationError = function (errorToSend, res) {
        res.sendStatus(400);
        res.json({ errorMessage: errorToSend });
    };
    BaseServices.prototype.test = function () {
        console.log("Its working fine here !");
    };
    return BaseServices;
}());
exports.BaseServices = BaseServices;
