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
exports.CategoryServices = void 0;
var messages_1 = require("../constants/messages");
var category_1 = require("../entitymodels/category");
var category_validation_1 = require("../models/category-validation");
var validation_service_1 = require("./validation-service");
var CategoryServices = /** @class */ (function () {
    function CategoryServices() {
    }
    CategoryServices.prototype.saveCategory = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var newCategory, validationServices, isValidCategory, categoryModel, savedCategory;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newCategory = new category_validation_1.CategoryDTO(req.body);
                        validationServices = new validation_service_1.ValidationServices();
                        return [4 /*yield*/, validationServices.validateCategoryDTO(newCategory)];
                    case 1:
                        isValidCategory = _a.sent();
                        if (!!isValidCategory) return [3 /*break*/, 3];
                        categoryModel = new category_1.Category(req.body);
                        return [4 /*yield*/, categoryModel.save()];
                    case 2:
                        savedCategory = _a.sent();
                        res.json(savedCategory);
                        return [3 /*break*/, 4];
                    case 3: throw new Error(JSON.stringify(isValidCategory));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CategoryServices.prototype.updateFullCategory = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var newCategory, validationServices, isValidCategory, id, category;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newCategory = new category_validation_1.CategoryDTO(req.body);
                        validationServices = new validation_service_1.ValidationServices();
                        return [4 /*yield*/, validationServices.validateCategoryDTO(newCategory)];
                    case 1:
                        isValidCategory = _a.sent();
                        if (!!isValidCategory) return [3 /*break*/, 6];
                        id = req.params.id;
                        return [4 /*yield*/, category_1.Category.findById(id)];
                    case 2:
                        category = _a.sent();
                        if (!(category === null)) return [3 /*break*/, 3];
                        res.json({ message: messages_1.messages.category_not_found });
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, category_1.Category.updateOne(category, newCategory)];
                    case 4:
                        _a.sent();
                        res.json(newCategory);
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        res.json({ message: isValidCategory });
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
                        if (!(category === null)) return [3 /*break*/, 2];
                        res.json({ message: messages_1.messages.category_not_found });
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, category_1.Category.deleteOne(category)];
                    case 3:
                        _a.sent();
                        res.json(category);
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
                        if (category === null) {
                            res.json({ message: messages_1.messages.category_not_found });
                        }
                        else {
                            res.json(category);
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
                        newCategory = req.body;
                        tempCategory = JSON.parse(JSON.stringify(categoryToUpdate));
                        for (p in tempCategory) {
                            newCategory[p] = newCategory[p] ? newCategory[p] : tempCategory[p];
                        }
                        return [4 /*yield*/, category_1.Category.updateOne(categoryToUpdate, newCategory)];
                    case 2:
                        _a.sent();
                        res.json(newCategory);
                        return [2 /*return*/];
                }
            });
        });
    };
    CategoryServices.prototype.searchCategory = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var searchParams, sort, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        searchParams = req.body;
                        sort = searchParams.order.direction === 'asc' ? '' : '-';
                        return [4 /*yield*/, category_1.Category.find({ $and: [{ 'name': searchParams.name }, { 'active': searchParams.active }] }).
                                limit(searchParams.limit).skip(searchParams.offset).sort(sort + searchParams.order.order_by)];
                    case 1:
                        result = _a.sent();
                        res.json(result);
                        return [2 /*return*/];
                }
            });
        });
    };
    return CategoryServices;
}());
exports.CategoryServices = CategoryServices;
