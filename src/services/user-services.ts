import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../entitymodels/user';
import { RegistraionDTO } from '../models/user-validation';
import { ValidationServices } from './validation-service';
import * as dotenv from "dotenv";
import { messages } from '../constants/messages';
dotenv.config();


export class UserServices {


    async registration(req: Request, res: Response) {

        const newUser = new RegistraionDTO(req.body);
        const validationServices = new ValidationServices();
        const isValidUser = await validationServices.validateUserDTO(newUser);
        if (!isValidUser) {


            const userModel = new User(req.body);

            const token = jwt.sign({ id: userModel._id }, `${process.env.PRIVATE_KEY}`);
            userModel.token = token;

            const registeredUser = await userModel.save();
            res.json(registeredUser);


        }
        else {
            res.json({ message: isValidUser });
        }

    }



    async login(req: Request, res: Response) {

        const user = new RegistraionDTO(req.body);
        const validationServices = new ValidationServices();
        const isValidUser = await validationServices.validateCredentials(user);

        if (!isValidUser) {

            const userCheck = await User.findOne({ '$and': [{ user_name: user.user_name }, { password: user.password }] });
            if (userCheck === null) {
                res.json({ message: messages.invalid_credentailss });
            }
            else {
                const varifiedUser = jwt.verify(userCheck.token, `${process.env.PRIVATE_KEY}`) as { id: string };

                if (userCheck._id == varifiedUser.id) {
                    res.json({ message: messages.valid_user });
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



    async getUserDetails(req: Request, res: Response) {

        const user = new RegistraionDTO(req.body);
        const userDetails = await User.findOne({ '$and': [{ user_name: user.user_name }, { password: user.password }] });
        if (userDetails == null) {
            res.json({ message: messages.invalid_credentailss });
        }
        else {
            res.json(userDetails);
        }


    }



}

