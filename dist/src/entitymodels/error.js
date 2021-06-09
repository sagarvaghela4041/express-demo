"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorLog = void 0;
var mongoose_1 = require("mongoose");
var ErrorModel = new mongoose_1.Schema({
    error_name: String,
    error_message: String,
    api: String,
    created_date: Date,
    created_by: String
});
exports.ErrorLog = mongoose_1.model('error_log', ErrorModel);
