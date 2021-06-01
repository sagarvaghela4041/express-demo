import { NextFunction, Request, Response } from 'express';
import { messages } from '../constants/messages';
import jwt from 'jsonwebtoken';
import { User } from '../entitymodels/user';
import { RegistraionDTO } from '../models/user-validation';
import { ValidationServices } from '../services/validation-service';

export async function authentication(req: Request, res: Response, next: NextFunction): Promise<void> {
    const user = new RegistraionDTO(req.body);
    const validationServices = new ValidationServices();
    const isValidUser = await validationServices.validateCredentials(user);

    if (!isValidUser) {

        const userCheck = await User.findOne({ '$and': [{ user_name: user.user_name }, { password: user.password }] });
        if (userCheck == null) {
            res.json({ message: messages.invalid_credentailss });
        }
        else {
            const varifiedUser = jwt.verify(userCheck.token, `${process.env.PRIVATE_KEY}`) as { id: string };

            if (userCheck._id === varifiedUser.id) {
                next();
            }
            else {
                res.json({ message: messages.token_not_matched });
            }
        }


    }
    else {
        res.json({ message: isValidUser });
    }
}