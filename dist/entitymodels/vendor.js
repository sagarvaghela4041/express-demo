"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vendor = void 0;
var mongoose_1 = require("mongoose");
var VendorModel = new mongoose_1.Schema({
    name: String,
    email: String,
    phone_number: String,
    address: {
        line1: String,
        line2: String,
        state: String,
        city: String,
        zip: String
    }
});
exports.Vendor = mongoose_1.model('vendor', VendorModel);
