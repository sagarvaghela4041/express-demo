import { Router } from 'express';
import { categoryVersion } from '../constants/system-constants';
import { categoryRouter } from './category-routes';
import { productRouter } from './product-routes';
import { vendorRouter } from './vendor-routes';

const generalRouter = Router();

generalRouter.use(`/${categoryVersion}/category`, categoryRouter);
generalRouter.use(`/${categoryVersion}/vendor`, vendorRouter);
generalRouter.use(`/${categoryVersion}/product`, productRouter);
export { generalRouter }
