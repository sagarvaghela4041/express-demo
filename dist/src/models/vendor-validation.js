"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorDTO = exports.AddressDTO = void 0;
var class_validator_1 = require("class-validator");
var AddressDTO = /** @class */ (function () {
    function AddressDTO(address) {
        this.line_1 = address.line_1;
        this.line_2 = address.line_2;
        this.city = address.city;
        this.state = address.state;
        this.zip = address.zip;
    }
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.Length(4, 20)
    ], AddressDTO.prototype, "line_1", void 0);
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.Length(4, 20)
    ], AddressDTO.prototype, "line_2", void 0);
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.Length(4, 20)
    ], AddressDTO.prototype, "city", void 0);
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.Length(4, 20)
    ], AddressDTO.prototype, "state", void 0);
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.Length(4, 20)
    ], AddressDTO.prototype, "zip", void 0);
    return AddressDTO;
}());
exports.AddressDTO = AddressDTO;
var VendorDTO = /** @class */ (function () {
    function VendorDTO(vendor) {
        this.name = vendor.name;
        this.email = vendor.email;
        this.phone_number = vendor.phone_number;
        this.address = vendor.address;
    }
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.Length(4, 20)
    ], VendorDTO.prototype, "name", void 0);
    __decorate([
        class_validator_1.IsEmail()
    ], VendorDTO.prototype, "email", void 0);
    __decorate([
        class_validator_1.Length(10, 13)
    ], VendorDTO.prototype, "phone_number", void 0);
    __decorate([
        class_validator_1.ValidateNested()
    ], VendorDTO.prototype, "address", void 0);
    return VendorDTO;
}());
exports.VendorDTO = VendorDTO;
