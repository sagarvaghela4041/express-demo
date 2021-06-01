import { Router } from 'express';
import { categoryVersion } from '../constants/messages';
import { categoryRouter } from './category-routes';
import { vendorRouter } from './vendor-routes';

const generalRouter = Router();

generalRouter.use(`/${categoryVersion}/category`, categoryRouter);
generalRouter.use(`/${categoryVersion}/vendor`, vendorRouter);
export { generalRouter }
