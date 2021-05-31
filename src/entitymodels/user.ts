import mongoose, { Document, Schema } from 'mongoose';

export interface IUserModel extends Document {
    first_name: string;
    last_name: string;
    date_of_birth: Date;
    phone: string;
    user_name: string;
    password: string;
    token: string;
}

const UserModel: Schema = new Schema({
    first_name: String,
    last_name: String,
    date_of_birth: Date,
    phone: String,
    user_name: {
        type: String,
        index: {
            unique: true
        }
    },
    password: String,
    token: String
});

export const User = mongoose.model<IUserModel>('UserAuth', UserModel);