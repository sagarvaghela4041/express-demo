import { NextFunction, Request, Response } from 'express';
import { INVALID_CREDENTIALS, TOKEN_NOT_MATCHED, VALID_USER } from '../constants/messages';
import jwt from 'jsonwebtoken';
import { User } from '../entitymodels/user';
import { RegistraionDTO } from '../models/user-validation';
import { ValidationServices } from '../services/validation-service';

export async function authentication(req: Request, res: Response, next: NextFunction) {
    const user = new RegistraionDTO(req.body);
    const validationServices = new ValidationServices();
    const isValidUser = await validationServices.validateCredentials(user);

    if (!isValidUser) {

        const userCheck = await User.findOne({ '$and': [{ 'userName': user.userName }, { 'password': user.password }] });
        if (userCheck == null) {
            res.json({ message: INVALID_CREDENTIALS });
        }
        else {
            const varifiedUser = jwt.verify(userCheck.token, `${process.env.PRIVATE_KEY}`) as { id: string };

            if (userCheck._id == varifiedUser.id) {
                next();
            }
            else {
                res.json({ message: TOKEN_NOT_MATCHED });
            }
        }


    }
    else {
        res.json({ message: isValidUser });
    }
}