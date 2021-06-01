import { Router } from 'express';
import { authentication } from '../middlewares/user-authentication';
import { CategoryServices } from '../services/category-service';

const categoryRouter = Router();

const categoryServices = new CategoryServices();

categoryRouter.post('', authentication, categoryServices.saveCategory);

categoryRouter.put('/:id', authentication, categoryServices.updateFullCategory);

categoryRouter.delete('/:id', authentication, categoryServices.deleteCategory);

categoryRouter.get('/:id', authentication, categoryServices.getCategory);

categoryRouter.patch('/:id', authentication, categoryServices.updateCategory);

categoryRouter.post('/search', authentication, categoryServices.searchCategory);

export { categoryRouter }