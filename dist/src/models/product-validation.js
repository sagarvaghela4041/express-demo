"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PorductDTO = exports.ProductFieldDTO = exports.ProductVendorDTO = void 0;
require("reflect-metadata");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var ProductVendorDTO = /** @class */ (function () {
    function ProductVendorDTO(productVendor) {
        this.price = productVendor.price;
        this.quantity = productVendor.quantity;
        this.delivery_area_zipcodes = productVendor.delivery_area_zipcodes;
    }
    __decorate([
        class_validator_1.IsNumber()
    ], ProductVendorDTO.prototype, "price", void 0);
    __decorate([
        class_validator_1.IsNumber()
    ], ProductVendorDTO.prototype, "quantity", void 0);
    __decorate([
        class_validator_1.IsArray(),
        class_validator_1.IsNumber({}, { each: true })
    ], ProductVendorDTO.prototype, "delivery_area_zipcodes", void 0);
    return ProductVendorDTO;
}());
exports.ProductVendorDTO = ProductVendorDTO;
var ProductFieldDTO = /** @class */ (function () {
    function ProductFieldDTO(fields) {
        this.name = fields.name;
        this.value = fields.value;
    }
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.Length(1, 20)
    ], ProductFieldDTO.prototype, "name", void 0);
    __decorate([
        class_validator_1.IsString({ each: true })
    ], ProductFieldDTO.prototype, "value", void 0);
    return ProductFieldDTO;
}());
exports.ProductFieldDTO = ProductFieldDTO;
var PorductDTO = /** @class */ (function () {
    function PorductDTO(product) {
        this.title = product.title;
        this.vendors = product.vendors.map(function (productVendor) { return new ProductVendorDTO(productVendor); });
        this.images = product.images;
        this.category_id = product.category_id;
        this.fields = product.fields.map(function (fields) { return new ProductFieldDTO(fields); });
    }
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.Length(4, 20)
    ], PorductDTO.prototype, "title", void 0);
    __decorate([
        class_validator_1.ValidateNested({ each: true }),
        class_transformer_1.Type(function () { return ProductVendorDTO; })
    ], PorductDTO.prototype, "vendors", void 0);
    __decorate([
        class_validator_1.IsArray(),
        class_validator_1.IsString({ each: true })
    ], PorductDTO.prototype, "images", void 0);
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty()
    ], PorductDTO.prototype, "category_id", void 0);
    __decorate([
        class_validator_1.ValidateNested({ each: true }),
        class_transformer_1.Type(function () { return ProductFieldDTO; })
    ], PorductDTO.prototype, "fields", void 0);
    return PorductDTO;
}());
exports.PorductDTO = PorductDTO;
