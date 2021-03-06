import express from 'express';
import { database_connection } from './services/database-service';
import { json } from 'body-parser';
import { router } from './routes/registration-routes';
import * as dotenv from "dotenv";
import { errorHandler } from './middlewares/error-handler';
import { categoryRouter } from './routes/category-routes';
import { generalRouter } from './routes/routes';
import { errorRouter } from './routes/error-routes';
import { vendorRouter } from './routes/vendor-routes';
import { productRouter } from './routes/product-routes';
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../swagger.json';
import coockieParser from 'cookie-parser';
dotenv.config();

const app = express();
database_connection();
app.use(json());
app.use(coockieParser());
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);
app.use(router);
app.use(errorRouter);
app.use(generalRouter);
app.use(categoryRouter);
app.use(vendorRouter);
app.use(productRouter);
app.use(errorHandler);

app.listen(`${process.env.PORT}`, () => console.log(`Server started on port: ${process.env.PORT}`));