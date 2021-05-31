import { Router, Request, Response, NextFunction } from 'express';
import { CategoryServices } from '../services/category-service';

const categoryRouter = Router();

const categoryServices = new CategoryServices();

categoryRouter.post('/v1/category', (req: Request, res: Response, next: NextFunction) => categoryServices.saveCategory(req, res).catch(next));

categoryRouter.put('/v1/category/:id', (req: Request, res: Response) => categoryServices.updateFullCategory(req, res));

categoryRouter.delete('/v1/category/:id', (req: Request, res: Response) => categoryServices.deleteCategory(req, res));

categoryRouter.get('/v1/category/:id', (req: Request, res: Response) => categoryServices.getCategory(req, res));

categoryRouter.patch('/v1/category/:id', (req: Request, res: Response) => categoryServices.updateCategory(req, res));

categoryRouter.post('/v1/category/search', (req: Request, res: Response) => categoryServices.searchCategory(req, res));

export { categoryRouter }