import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { messages } from '../constants/messages';

export async function authentication(req: Request, res: Response, next: NextFunction): Promise<void> {
    const token = req.cookies.token as string;
    if (token) {

        const verifiedUser = jwt.verify(token, `${process.env.PRIVATE_KEY}`) as { id: string };
        if (verifiedUser.id) {
            next();
        }
        else {
            res.json(messages.token_not_matched);
        }
    }
    else {
        res.json({ message: messages.user_not_logged_in });
    }


}