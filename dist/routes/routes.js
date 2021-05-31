"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generalRouter = void 0;
var express_1 = require("express");
var messages_1 = require("../constants/messages");
var category_routes_1 = require("./category-routes");
var generalRouter = express_1.Router();
exports.generalRouter = generalRouter;
generalRouter.use("/" + messages_1.categoryVersion + "/category", category_routes_1.categoryRouter);