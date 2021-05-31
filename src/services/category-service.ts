import { Request, Response } from 'express';
import { messages } from '../constants/messages';
import { Category } from '../entitymodels/category';
import { CategoryDTO } from '../models/category-validation';
import { ValidationServices } from './validation-service';

export class CategoryServices {

    async saveCategory(req: Request, res: Response) {
        const newCategory = new CategoryDTO(req.body);
        const validationServices = new ValidationServices();
        const isValidCategory = await validationServices.validateCategoryDTO(newCategory);
        if (!isValidCategory) {

            const categoryModel = new Category(req.body);
            const savedCategory = await categoryModel.save();
            res.json(savedCategory);
        }
        else {
            res.json({ message: isValidCategory });
        }
    }

    async updateFullCategory(req: Request, res: Response) {
        const newCategory = new CategoryDTO(req.body);
        const validationServices = new ValidationServices();
        const isValidCategory = await validationServices.validateCategoryDTO(newCategory);

        if (!isValidCategory) {

            const id = req.params.id;
            const category = await Category.findById(id);
            if (category === null) {
                res.json({ message: messages.category_not_found })
            }
            else {
                await Category.updateOne(category, newCategory);
                res.json(newCategory);
            }
        }
        else {
            res.json({ message: isValidCategory });
        }
    }

    async deleteCategory(req: Request, res: Response) {
        const id = req.params.id;
        const category = await Category.findById(id);
        if (category === null) {
            res.json({ message: messages.category_not_found })
        }
        else {
            await Category.deleteOne(category);
            res.json(category);
        }
    }

    async getCategory(req: Request, res: Response) {
        const id = req.params.id;
        const category = await Category.findById(id);
        if (category === null) {
            res.json({ message: messages.category_not_found });
        }
        else {
            res.json(category);
        }
    }

    async updateCategory(req: Request, res: Response) {
        const id = req.params.id;
        const categoryToUpdate = await Category.findById(id);
        const newCategory = req.body;
        const tempCategory = JSON.parse(JSON.stringify(categoryToUpdate));
        for (const p in tempCategory) {
            newCategory[p] = newCategory[p] ? newCategory[p] : tempCategory[p];
        }
        await Category.updateOne(categoryToUpdate, newCategory);
        res.json(newCategory);

    }

    async searchCategory(req: Request, res: Response) {

        const searchParams = req.body;
        const sort = searchParams.order.direction === 'asc' ? '' : '-';
        const result = await Category.find({ $and: [{ 'name': searchParams.name }, { 'active': searchParams.active }] }).
            limit(searchParams.limit).skip(searchParams.offset).sort(sort + searchParams.order.order_by);
        res.json(result);

    }


}