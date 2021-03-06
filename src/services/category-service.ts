import { Request, Response } from 'express';
import { messages } from '../constants/messages';
import { Category } from '../entitymodels/category';
import { CategoryDTO } from '../models/category-validation';
import { BaseService } from './services-base';
import { ValidationServices } from './validation-service';

export class CategoryServices extends BaseService {

    async saveCategory(req: Request, res: Response): Promise<void> {
        const newCategory = new CategoryDTO(req.body);
        const validationServices = new ValidationServices();
        const validationErrors = await validationServices.validateCategoryDTO(newCategory);
        if (!validationErrors?.length) {

            const categoryModel = new Category(req.body);
            const savedCategory = await categoryModel.save();
            super.sendResponse(savedCategory, res);
        }
        else {
            super.sendValidationError(validationErrors, res);
        }
    }

    async updateFullCategory(req: Request, res: Response): Promise<void> {
        const newCategory = new CategoryDTO(req.body);
        const validationServices = new ValidationServices();
        const validationErrors = await validationServices.validateCategoryDTO(newCategory);

        if (!validationErrors?.length) {

            const id = req.params.id;
            const category = await Category.findById(id);
            if (!category) {
                super.sendValidationError({ message: messages.category_not_found }, res);
            }
            else {
                await Category.updateOne({ _id: id }, newCategory);
                super.sendResponse(newCategory, res);
            }
        }
        else {
            super.sendValidationError({ message: validationErrors }, res);
        }
    }

    async deleteCategory(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        const category = await Category.findById(id);
        if (!category) {
            super.sendValidationError({ message: messages.category_not_found }, res)
        }
        else {
            await Category.deleteOne({ _id: id });
            super.sendResponse(category, res);
        }
    }

    async getCategory(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        const category = await Category.findById(id);
        if (!category) {
            super.sendValidationError({ message: messages.category_not_found }, res);
        }
        else {
            super.sendResponse(category, res);
        }
    }

    async updateCategory(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        const categoryToUpdate = await Category.findById(id);
        if (!categoryToUpdate) {
            super.sendValidationError({ message: messages.category_not_found }, res);
        }
        else {
            const newCategory = req.body;
            const tempCategory = JSON.parse(JSON.stringify(categoryToUpdate));
            for (const p in tempCategory) {
                newCategory[p] = newCategory[p] ? newCategory[p] : tempCategory[p];
            }
            await Category.updateOne({ _id: id }, newCategory);
            super.sendResponse(newCategory, res);
        }

    }

    async searchCategory(req: Request, res: Response): Promise<void> {

        const searchParams = req.body;
        const sort = searchParams.order.direction === 'asc' ? '' : '-';
        const searchResults = await Category.find({ $and: [{ name: searchParams.name }, { active: searchParams.active }] }).
            limit(searchParams.limit).skip(searchParams.offset).sort(`${sort}${searchParams.order.order_by}`);
        super.sendResponse(searchResults, res);

    }


}