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
exports.ProductServices = void 0;
var services_base_1 = require("./services-base");
var product_validation_1 = require("../models/product-validation");
var validation_service_1 = require("./validation-service");
var product_1 = require("../entitymodels/product");
var category_1 = require("../entitymodels/category");
var ProductServices = /** @class */ (function (_super) {
    __extends(ProductServices, _super);
    function ProductServices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductServices.prototype.saveProduct = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var newProduct, validationServices, validationErrors, category_fields, notProvidedFields, _loop_1, _i, _a, field, productModel, savedProduct;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        newProduct = new product_validation_1.PorductDTO(req.body);
                        validationServices = new validation_service_1.ValidationServices();
                        return [4 /*yield*/, validationServices.validateProductDTO(newProduct)];
                    case 1:
                        validationErrors = _b.sent();
                        if (!!(validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.length)) return [3 /*break*/, 6];
                        return [4 /*yield*/, category_1.Category.findById(newProduct.category_id)];
                    case 2:
                        category_fields = _b.sent();
                        notProvidedFields = [];
                        if (category_fields) {
                            _loop_1 = function (field) {
                                var nameFlag = false;
                                var _loop_2 = function (value) {
                                    var valueFlag = newProduct.fields.find(function (productField) {
                                        if (productField.name === field.name && productField.value === value) {
                                            return true;
                                        }
                                    });
                                    if (valueFlag) {
                                        nameFlag = true;
                                        return "break";
                                    }
                                };
                                for (var _c = 0, _d = field.values; _c < _d.length; _c++) {
                                    var value = _d[_c];
                                    var state_1 = _loop_2(value);
                                    if (state_1 === "break")
                                        break;
                                }
                                if (!nameFlag) {
                                    notProvidedFields.push({ name: field.name });
                                }
                            };
                            for (_i = 0, _a = category_fields.fields; _i < _a.length; _i++) {
                                field = _a[_i];
                                _loop_1(field);
                            }
                        }
                        if (!!(notProvidedFields === null || notProvidedFields === void 0 ? void 0 : notProvidedFields.length)) return [3 /*break*/, 4];
                        productModel = new product_1.Product(req.body);
                        return [4 /*yield*/, productModel.save()];
                    case 3:
                        savedProduct = _b.sent();
                        _super.prototype.sendResponse.call(this, savedProduct, res);
                        return [3 /*break*/, 5];
                    case 4:
                        _super.prototype.sendValidationError.call(this, notProvidedFields, res);
                        _b.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        _super.prototype.sendValidationError.call(this, validationErrors, res);
                        _b.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ProductServices.prototype.searchProduct = function (req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var searchParams, sort, searchResults;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        searchParams = req.body;
                        sort = searchParams.order.direction === 'asc' ? '' : '-';
                        return [4 /*yield*/, product_1.Product.find({
                                $and: [{ title: { $regex: searchParams.title, $options: 'i' } }, { vendors: { $elemMatch: { price: { $gte: (_a = searchParams.price_range) === null || _a === void 0 ? void 0 : _a[0], $lte: (_b = searchParams.price_range) === null || _b === void 0 ? void 0 : _b[1] } } } }, { vendors: { $elemMatch: { _id: searchParams.vendor_id } } },
                                    { category_id: searchParams.category_id },
                                    { fields: { $elemMatch: { name: { $filter: { input: "$searchParams.fields", as: "field", cond: "$$fields.name" } } } } }]
                            }).
                                limit(searchParams.limit).skip(searchParams.offset).sort("" + sort + searchParams.order.order_by)];
                    case 1:
                        searchResults = _c.sent();
                        _super.prototype.sendResponse.call(this, searchResults, res);
                        return [2 /*return*/];
                }
            });
        });
    };
    return ProductServices;
}(services_base_1.BaseService));
exports.ProductServices = ProductServices;
