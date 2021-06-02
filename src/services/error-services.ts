import { ErrorLog } from "../entitymodels/error";
import { BaseService } from "./services-base";
import { Request, Response } from 'express';

export class ErrorServices extends BaseService {
    async searchErrors(req: Request, res: Response): Promise<void> {

        const searchParams = req.body;
        const sort = searchParams.order.direction === 'asc' ? '' : '-';
        const searchResults = await ErrorLog.find({ $or: [{ error_name: searchParams.error_name }, { error_message: searchParams.message }] }).
            limit(searchParams.limit).skip(searchParams.offset).sort(`${sort}${searchParams.order.order_by}`);
        super.sendResponse(searchResults, res);
    }

}