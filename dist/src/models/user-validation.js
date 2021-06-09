"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistraionDTO = void 0;
var class_validator_1 = require("class-validator");
var RegistraionDTO = /** @class */ (function () {
    function RegistraionDTO(user) {
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.date_of_birth = new Date(user.date_of_birth);
        this.phone = user.phone;
        this.user_name = user.user_name;
        this.password = user.password;
    }
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.Length(1, 20)
    ], RegistraionDTO.prototype, "first_name", void 0);
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.Length(1, 20)
    ], RegistraionDTO.prototype, "last_name", void 0);
    __decorate([
        class_validator_1.IsDate()
    ], RegistraionDTO.prototype, "date_of_birth", void 0);
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.Length(10, 13)
    ], RegistraionDTO.prototype, "phone", void 0);
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.Length(1, 20, { groups: ['credentials'] })
    ], RegistraionDTO.prototype, "user_name", void 0);
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'password too weak' }),
        class_validator_1.Length(8, 24, { groups: ['credentials'] })
    ], RegistraionDTO.prototype, "password", void 0);
    return RegistraionDTO;
}());
exports.RegistraionDTO = RegistraionDTO;
