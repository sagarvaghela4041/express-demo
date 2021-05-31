"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationServices = void 0;
require("reflect-metadata");
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var ValidationServices = /** @class */ (function () {
    function ValidationServices() {
    }
    ValidationServices.prototype.validateUserDTO = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var isValidUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, class_validator_1.validate(user)];
                    case 1:
                        isValidUser = _a.sent();
                        if (isValidUser.length > 0) {
                            return [2 /*return*/, this.createResponse(isValidUser)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ValidationServices.prototype.validateCredentials = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var isValid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, class_validator_1.validate(user, { groups: ['credentials'] })];
                    case 1:
                        isValid = _a.sent();
                        if (isValid.length > 0) {
                            return [2 /*return*/, this.createResponse(isValid)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ValidationServices.prototype.createResponse = function (validationErrors) {
        var response = [];
        for (var _i = 0, validationErrors_1 = validationErrors; _i < validationErrors_1.length; _i++) {
            var validationError = validationErrors_1[_i];
            var error = {
                property: validationError.property,
                constraints: validationError.constraints
            };
            response.push(error);
        }
        return response;
    };
    ValidationServices.prototype.validateCategoryDTO = function (category) {
        return __awaiter(this, void 0, void 0, function () {
            var isValidCategory;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, class_validator_1.validate(category)];
                    case 1:
                        isValidCategory = _a.sent();
                        if (isValidCategory.length > 0) {
                            return [2 /*return*/, this.createResponse(isValidCategory)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ValidationServices.prototype.validateDTO = function (type, object) {
        return __awaiter(this, void 0, void 0, function () {
            var isValidDTO;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, class_validator_1.validate(class_transformer_1.plainToClass(type, object))];
                    case 1:
                        isValidDTO = _a.sent();
                        if (isValidDTO.length > 0) {
                            return [2 /*return*/, this.createResponse(isValidDTO)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return ValidationServices;
}());
exports.ValidationServices = ValidationServices;
