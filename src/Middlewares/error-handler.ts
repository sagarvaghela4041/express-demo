import { NextFunction, Request, Response } from "express";
import { ErrorLog } from "../entitymodels/error";


export async function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  
  const today = new Date();
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  
  const error = new ErrorLog();
  error.error_name = err.name;
  error.error_message = JSON.parse(err.message);
  error.api = req.url;
  error.created_date = date;
  error.created_by = "test";
  
  await error.save();

  res.json(error);
}