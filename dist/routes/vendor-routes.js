"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorRouter = void 0;
var express_1 = require("express");
var vendor_services_1 = require("../services/vendor-services");
var vendorRouter = express_1.Router();
exports.vendorRouter = vendorRouter;
var vendorServices = new vendor_services_1.VendorServices();
vendorRouter.post('', vendorServices.saveVendor);
