"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
var express_1 = require("express");
var category_service_1 = require("../services/category-service");
var categoryRouter = express_1.Router();
exports.categoryRouter = categoryRouter;
var categoryServices = new category_service_1.CategoryServices();
categoryRouter.post('/v1/category', function (req, res, next) { return categoryServices.saveCategory(req, res).catch(next); });
categoryRouter.put('/v1/category/:id', function (req, res) { return categoryServices.updateFullCategory(req, res); });
categoryRouter.delete('/v1/category/:id', function (req, res) { return categoryServices.deleteCategory(req, res); });
categoryRouter.get('/v1/category/:id', function (req, res) { return categoryServices.getCategory(req, res); });
categoryRouter.patch('/v1/category/:id', function (req, res) { return categoryServices.updateCategory(req, res); });
categoryRouter.post('/v1/category/search', function (req, res) { return categoryServices.searchCategory(req, res); });
