import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { messages } from '../constants/messages';

export async function authentication(req: Request, res: Response, next: NextFunction): Promise<void> {
    const token = req.header('token') as string;
    const verifiedUser = jwt.verify(token, `${process.env.PRIVATE_KEY}`) as { id: string };
    if (verifiedUser.id) {
        next();
    }
    else {
        res.json(messages.token_not_matched);
    }

}