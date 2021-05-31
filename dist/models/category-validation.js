"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryDTO = void 0;
var class_validator_1 = require("class-validator");
var CategoryDTO = /** @class */ (function () {
    function CategoryDTO(category) {
        this.name = category.name;
        this.active = category.active;
        this.image = category.image;
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
    return CategoryDTO;
}());
exports.CategoryDTO = CategoryDTO;
