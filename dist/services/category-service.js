"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.CategoryServices = void 0;
var messages_1 = require("../constants/messages");
var category_1 = require("../entitymodels/category");
var category_validation_1 = require("../models/category-validation");
var services_base_1 = require("./services-base");
var validation_service_1 = require("./validation-service");
var CategoryServices = /** @class */ (function (_super) {
    __extends(CategoryServices, _super);
    function CategoryServices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CategoryServices.prototype.saveCategory = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var newCategory, validationServices, validationErrors, categoryModel, savedCategory;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newCategory = new category_validation_1.CategoryDTO(req.body);
                        validationServices = new validation_service_1.ValidationServices();
                        return [4 /*yield*/, validationServices.validateCategoryDTO(newCategory)];
                    case 1:
                        validationErrors = _a.sent();
                        if (!!(validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.length)) return [3 /*break*/, 3];
                        categoryModel = new category_1.Category(req.body);
                        return [4 /*yield*/, categoryModel.save()];
                    case 2:
                        savedCategory = _a.sent();
                        _super.prototype.sendResponse.call(this, savedCategory, res);
                        return [3 /*break*/, 4];
                    case 3:
                        _super.prototype.sendValidationError.call(this, validationErrors, res);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CategoryServices.prototype.updateFullCategory = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var newCategory, validationServices, validationErrors, id, category;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newCategory = new category_validation_1.CategoryDTO(req.body);
                        validationServices = new validation_service_1.ValidationServices();
                        return [4 /*yield*/, validationServices.validateCategoryDTO(newCategory)];
                    case 1:
                        validationErrors = _a.sent();
                        if (!!(validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.length)) return [3 /*break*/, 6];
                        id = req.params.id;
                        return [4 /*yield*/, category_1.Category.findById(id)];
                    case 2:
                        category = _a.sent();
                        if (!!category) return [3 /*break*/, 3];
                        _super.prototype.sendValidationError.call(this, { message: messages_1.messages.category_not_found }, res);
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, category_1.Category.updateOne({ _id: id }, newCategory)];
                    case 4:
                        _a.sent();
                        _super.prototype.sendResponse.call(this, newCategory, res);
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        _super.prototype.sendValidationError.call(this, { message: validationErrors }, res);
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    CategoryServices.prototype.deleteCategory = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, category;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, category_1.Category.findById(id)];
                    case 1:
                        category = _a.sent();
                        if (!!category) return [3 /*break*/, 2];
                        _super.prototype.sendValidationError.call(this, { message: messages_1.messages.category_not_found }, res);
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, category_1.Category.deleteOne({ _id: id })];
                    case 3:
                        _a.sent();
                        _super.prototype.sendResponse.call(this, category, res);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CategoryServices.prototype.getCategory = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, category;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, category_1.Category.findById(id)];
                    case 1:
                        category = _a.sent();
                        if (!category) {
                            _super.prototype.sendValidationError.call(this, { message: messages_1.messages.category_not_found }, res);
                        }
                        else {
                            _super.prototype.sendResponse.call(this, category, res);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CategoryServices.prototype.updateCategory = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, categoryToUpdate, newCategory, tempCategory, p;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, category_1.Category.findById(id)];
                    case 1:
                        categoryToUpdate = _a.sent();
                        if (!!categoryToUpdate) return [3 /*break*/, 2];
                        _super.prototype.sendValidationError.call(this, { message: messages_1.messages.category_not_found }, res);
                        return [3 /*break*/, 4];
                    case 2:
                        newCategory = req.body;
                        tempCategory = JSON.parse(JSON.stringify(categoryToUpdate));
                        for (p in tempCategory) {
                            newCategory[p] = newCategory[p] ? newCategory[p] : tempCategory[p];
                        }
                        return [4 /*yield*/, category_1.Category.updateOne({ _id: id }, newCategory)];
                    case 3:
                        _a.sent();
                        _super.prototype.sendResponse.call(this, newCategory, res);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CategoryServices.prototype.searchCategory = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var searchParams, sort, searchResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        searchParams = req.body;
                        sort = searchParams.order.direction === 'asc' ? '' : '-';
                        return [4 /*yield*/, category_1.Category.find({ $and: [{ name: searchParams.name }, { active: searchParams.active }] }).
                                limit(searchParams.limit).skip(searchParams.offset).sort("" + sort + searchParams.order.order_by)];
                    case 1:
                        searchResults = _a.sent();
                        _super.prototype.sendResponse.call(this, searchResults, res);
                        return [2 /*return*/];
                }
            });
        });
    };
    return CategoryServices;
}(services_base_1.BaseServices));
exports.CategoryServices = CategoryServices;
