"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
function errorHandler(err, req, res, next) {
    res.json({ error: err.message });
}
exports.errorHandler = errorHandler;
