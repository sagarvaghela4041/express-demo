import express from 'express';
import {database_connection} from './Services/database-service';
import {json} from 'body-parser';
import {router} from './Routes/route';
import * as dotenv from "dotenv";
import { errorHandler } from './Middlewares/error-handler';
import { categoryRouter } from './Routes/category-routes';
dotenv.config();


const app = express();
database_connection();
app.use(json());
app.use(router);
app.use(categoryRouter);
app.use(errorHandler);


app.listen(`${process.env.PORT}`, () => console.log(`Server started on port: ${process.env.PORT}`));