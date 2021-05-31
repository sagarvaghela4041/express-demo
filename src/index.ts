import express from 'express';
import {database_connection} from './services/database-service';
import {json} from 'body-parser';
import {router} from './routes/route';
import * as dotenv from "dotenv";
import { errorHandler } from './middlewares/error-handler';
import { categoryRouter } from './routes/category-routes';
dotenv.config();


const app = express();
database_connection();
app.use(json());
app.use(router);
app.use(categoryRouter);
app.use(errorHandler);


app.listen(`${process.env.PORT}`, () => console.log(`Server started on port: ${process.env.PORT}`));