import { Router } from 'express';
import { authentication } from '../middlewares/user-authentication';
import { UserServices } from '../services/user-service';

const router = Router();
const userServices = new UserServices();

router.post('/registration', userServices.registration);

router.post('/login', userServices.login);

router.post('/get-user-details', authentication, userServices.getUserDetails);

export { router }