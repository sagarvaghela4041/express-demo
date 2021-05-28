import {Router, Request, Response} from 'express';
import { CategoryServices } from '../Services/category-service';

const categoryRouter = Router();

const categoryServices = new CategoryServices();

categoryRouter.post('/v1/category', (req:Request, res: Response) => categoryServices.saveCategory(req,res) );

categoryRouter.put('/v1/category/:id', (req:Request, res:Response) => categoryServices.updateFullCategory(req,res));

categoryRouter.delete('/v1/category/:id', (req:Request, res: Response) => categoryServices.deleteCategory(req,res) );

categoryRouter.get('/v1/category/:id', (req:Request, res:Response) => categoryServices.getCategory(req,res));

categoryRouter.patch('/v1/category/:id', (req:Request, res:Response) => categoryServices.updateCategory(req,res));

categoryRouter.post('/v1/category/search', (req:Request, res:Response) => categoryServices.searchCategory(req,res));

export {categoryRouter}