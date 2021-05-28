import mongoose from 'mongoose';
import * as dotenv from "dotenv";
dotenv.config();

export function database_connection():void  {
    mongoose.connect(`${process.env.DATABASE_CONNECTION_URL}`,
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('Database Connected !'));
}