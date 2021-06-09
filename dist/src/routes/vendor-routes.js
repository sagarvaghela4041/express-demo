"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorRouter = void 0;
var express_1 = require("express");
var user_authentication_1 = require("../middlewares/user-authentication");
var vendor_service_1 = require("../services/vendor-service");
var vendorRouter = express_1.Router();
exports.vendorRouter = vendorRouter;
var vendorServices = new vendor_service_1.VendorServices();
vendorRouter.post('', user_authentication_1.authentication, vendorServices.saveVendor);
vendorRouter.put('/:id', user_authentication_1.authentication, vendorServices.updateFullVendor);
vendorRouter.delete('/:id', user_authentication_1.authentication, vendorServices.deleteVendor);
vendorRouter.get('/:id', user_authentication_1.authentication, vendorServices.getVendor);
vendorRouter.patch('/:id', user_authentication_1.authentication, vendorServices.updateVendor);
vendorRouter.post('/search', user_authentication_1.authentication, vendorServices.searchVendor);
