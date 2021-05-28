import {Router, Request, Response} from 'express';
import { CategoryServices } from '../Services/category-service';

const categoryRouter = Router();

const categoryServices = new CategoryServices();

categoryRouter.post('/v1/category', (req:Request, res: Response) => categoryServices.saveCategory(req,res) );

categoryRouter.delete('/v1/category/:id', (req:Request, res: Response) => categoryServices.deleteCategory(req,res) );

export {categoryRouter}