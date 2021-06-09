"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorRouter = void 0;
var express_1 = require("express");
var error_services_1 = require("../services/error-services");
var errorRouter = express_1.Router();
exports.errorRouter = errorRouter;
var errorServices = new error_services_1.ErrorServices();
errorRouter.post('/errors', errorServices.searchErrors);
