import { Response } from 'express';

export class BaseService {
    sendResponse(responseToSend: unknown, res: Response): void {
        res.json(responseToSend);
    }

    sendValidationError(errorToSend: unknown, res: Response): void {
        res.json(errorToSend);
    }
}