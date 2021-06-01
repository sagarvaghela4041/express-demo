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
exports.VendorServices = void 0;
var vendor_validations_1 = require("../models/vendor-validations");
var services_base_1 = require("./services-base");
var validation_service_1 = require("./validation-service");
var vendor_1 = require("../entitymodels/vendor");
var VendorServices = /** @class */ (function (_super) {
    __extends(VendorServices, _super);
    function VendorServices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VendorServices.prototype.saveVendor = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var newVendor, newAddress, validationServices, validationErrors, vendorModel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newVendor = new vendor_validations_1.VendorDTO(req.body);
                        newAddress = new vendor_validations_1.AddressDTO(newVendor.address);
                        newVendor.address = newAddress;
                        validationServices = new validation_service_1.ValidationServices();
                        return [4 /*yield*/, validationServices.validateVendorDTO(newVendor)];
                    case 1:
                        validationErrors = _a.sent();
                        if (!(validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.length)) {
                            vendorModel = new vendor_1.Vendor(req.body);
                            // const savedVendor = await vendorModel.save();
                            // super.sendResponse(savedVendor, res);
                        }
                        else {
                            _super.prototype.sendValidationError.call(this, validationErrors, res);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return VendorServices;
}(services_base_1.BaseServices));
exports.VendorServices = VendorServices;
