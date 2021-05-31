import mongoose, { Schema, Document, model } from 'mongoose';

export interface IError extends Document {
    error_name: string;
    error_message: string;
    api: string;
    created_date: Date;
    created_by: string;
}

const ErrorModel: Schema = new Schema({
    error_name: String,
    error_message: String,
    api: String,
    created_date: Date,
    created_by: String
});

export const ErrorLog = model<IError>('error_log', ErrorModel);
