"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var mongoose_1 = require("mongoose");
var ProductModel = new mongoose_1.Schema({
    title: String,
    vendors: [
        {
            price: Number,
            quantity: Number,
            delivery_area_zipcodes: [Number]
        }
    ],
    images: [String],
    category_id: String,
    fields: [
        {
            name: String,
            value: String
        }
    ]
});
exports.Product = mongoose_1.model('product', ProductModel);
