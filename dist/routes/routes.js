"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generalRouter = void 0;
var express_1 = require("express");
var system_constants_1 = require("../constants/system-constants");
var category_routes_1 = require("./category-routes");
var product_routes_1 = require("./product-routes");
var vendor_routes_1 = require("./vendor-routes");
var generalRouter = express_1.Router();
exports.generalRouter = generalRouter;
generalRouter.use("/" + system_constants_1.categoryVersion + "/category", category_routes_1.categoryRouter);
generalRouter.use("/" + system_constants_1.categoryVersion + "/vendor", vendor_routes_1.vendorRouter);
generalRouter.use("/" + system_constants_1.categoryVersion + "/product", product_routes_1.productRouter);
