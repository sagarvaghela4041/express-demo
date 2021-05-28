import {Router, Request, Response, NextFunction } from 'express';
import { authentication } from '../Middlewares/user-authentication';
import { UserServices } from '../Services/user-services';

const router = Router();
const userServices = new UserServices();

router.post('/registration',(req: Request, res: Response, next:NextFunction) => userServices.registration(req,res).catch(next));

router.post('/login', (req:Request, res:Response, next:NextFunction) => userServices.login(req,res).catch(next));

router.post('/get-user-details',authentication, (req:Request, res:Response, next: NextFunction) => userServices.getUserDetails(req,res));

export {router}