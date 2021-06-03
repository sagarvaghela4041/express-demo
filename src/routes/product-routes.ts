import { Router } from 'express';
import { authentication } from '../middlewares/user-authentication';
import { ProductServices } from '../services/product-service';

const productRouter = Router();
const productServices = new ProductServices();
productRouter.post('', authentication, productServices.saveProduct);
productRouter.post('/search', authentication, productServices.searchProduct);
export { productRouter }