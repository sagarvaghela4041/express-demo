"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var CategoryModel = new mongoose_1.default.Schema({
    name: String,
    active: Boolean,
    image: String
});
var Category = mongoose_1.default.model('category', CategoryModel);
exports.Category = Category;
