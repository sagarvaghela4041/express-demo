import { Router } from 'express';
import { categoryVersion } from '../constants/messages';
import { categoryRouter } from './category-routes';

const generalRouter = Router();

generalRouter.use(`/${categoryVersion}/category`, categoryRouter);

export { generalRouter }
