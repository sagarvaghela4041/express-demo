import { Router } from 'express';
import { authentication } from '../middlewares/user-authentication';
import { ProductServices } from '../services/product-services';

const productRouter = Router();
const productServices = new ProductServices();
productRouter.post('', authentication, productServices.saveProduct);

export { productRouter }