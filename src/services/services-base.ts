import { Response } from 'express';

export class BaseServices {
    sendResponse(responseToSend: any, res: Response): void {
        res.json(responseToSend);
    }

    sendValidationError(errorToSend: object, res: Response): void {
        res.json(errorToSend);
    }
}