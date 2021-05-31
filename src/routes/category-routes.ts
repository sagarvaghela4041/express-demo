import { Router, Request, Response, NextFunction } from 'express';
import { CategoryServices } from '../services/category-service';

const categoryRouter = Router();

const categoryServices = new CategoryServices();

categoryRouter.post('', categoryServices.saveCategory);

categoryRouter.put('/:id', categoryServices.updateFullCategory);

categoryRouter.delete('/:id', categoryServices.deleteCategory);

categoryRouter.get('/:id', categoryServices.getCategory);

categoryRouter.patch('/:id', categoryServices.updateCategory);

categoryRouter.post('/search', categoryServices.searchCategory);

export { categoryRouter }