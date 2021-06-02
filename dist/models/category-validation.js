"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryDTO = exports.CategoryFieldDTO = void 0;
require("reflect-metadata");
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var CategoryFieldDTO = /** @class */ (function () {
    function CategoryFieldDTO(fields) {
        this.name = fields.name;
        this.values = fields.values;
    }
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.Length(4, 20)
    ], CategoryFieldDTO.prototype, "name", void 0);
    __decorate([
        class_validator_1.IsString({ each: true })
    ], CategoryFieldDTO.prototype, "values", void 0);
    return CategoryFieldDTO;
}());
exports.CategoryFieldDTO = CategoryFieldDTO;
var CategoryDTO = /** @class */ (function () {
    function CategoryDTO(category) {
        this.name = category.name;
        this.active = category.active;
        this.image = category.image;
        this.fields = category.fields.map(function (fields) { return new CategoryFieldDTO(fields); });
    }
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.Length(4, 20)
    ], CategoryDTO.prototype, "name", void 0);
    __decorate([
        class_validator_1.IsBoolean()
    ], CategoryDTO.prototype, "active", void 0);
    __decorate([
        class_validator_1.IsString()
    ], CategoryDTO.prototype, "image", void 0);
    __decorate([
        class_validator_1.ValidateNested(),
        class_transformer_1.Type(function () { return CategoryFieldDTO; })
    ], CategoryDTO.prototype, "fields", void 0);
    return CategoryDTO;
}());
exports.CategoryDTO = CategoryDTO;
