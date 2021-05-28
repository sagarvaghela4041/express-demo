"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorLog = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var ErrorModel = new mongoose_1.default.Schema({
    error_name: String,
    error_message: Object,
    api: String,
    created_date: Date,
    created_by: String
});
var ErrorLog = mongoose_1.default.model('error_log', ErrorModel);
exports.ErrorLog = ErrorLog;
