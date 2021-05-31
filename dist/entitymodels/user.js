"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var UserModel = new mongoose_1.default.Schema({
    first_name: String,
    last_name: String,
    date_of_birth: Date,
    phone: String,
    user_name: {
        type: String,
        index: {
            unique: true
        }
    },
    password: String,
    token: String,
});
var User = mongoose_1.default.model('UserAuth', UserModel);
exports.User = User;
