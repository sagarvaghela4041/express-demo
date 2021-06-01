import { NextFunction, Request, Response } from "express";
import { ErrorLog } from "../entitymodels/error";


export async function errorHandler(err: Error, req: Request, res: Response, next: NextFunction): Promise<void> {
  console.log("You must print");
  const error = new ErrorLog();
  error.error_name = err.name;
  error.error_message = err.message;
  error.api = req.url;
  error.created_date = new Date();
  error.created_by = "test";

  await error.save();

  res.json(error);
}