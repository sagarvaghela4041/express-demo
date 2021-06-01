import { Router } from 'express';
import { ErrorServices } from '../services/error-services';

const errorRouter = Router();
const errorServices = new ErrorServices();
errorRouter.post('/errors', errorServices.searchErrors);

export { errorRouter }