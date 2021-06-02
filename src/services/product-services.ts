import { BaseServices } from "./services-base";
import { Request, Response } from 'express';
import { PorductDTO } from "../models/product-validation";
import { ValidationServices } from "./validation-service";
import { Product } from "../entitymodels/products";

export class ProductServices extends BaseServices {
    async saveProduct(req: Request, res: Response): Promise<void> {
        const newProduct = new PorductDTO(req.body);
        const validationServices = new ValidationServices();
        const validationErrors = await validationServices.validateProductDTO(newProduct);
        if (!validationErrors?.length) {
            const productModel = new Product(req.body);
            const savedProduct = await productModel.save();
            super.sendResponse(savedProduct, res);
        }
        else {
            super.sendValidationError(validationErrors, res);
        }
    }
}