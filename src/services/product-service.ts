import { BaseService } from "./services-base";
import { Request, Response } from 'express';
import { PorductDTO, ProductFieldDTO } from "../models/product-validation";
import { ValidationServices } from "./validation-service";
import { Product } from "../entitymodels/product";
import { Category } from "../entitymodels/category";

export class ProductServices extends BaseService {
    async saveProduct(req: Request, res: Response): Promise<void> {
        const newProduct = new PorductDTO(req.body);
        const validationServices = new ValidationServices();
        const validationErrors = await validationServices.validateProductDTO(newProduct);
        if (!validationErrors?.length) {
            const category_fields = await Category.findById(newProduct.category_id);
            const notProvidedFields = [];
            if (category_fields) {
                for (const f of category_fields.fields) {
                    let nameFlag = false;
                    for (const v of f.values) {
                        const valueFlag = newProduct.fields.find((productField) => {
                            if (productField.name === f.name && productField.value === v) {
                                return true;
                            }
                        });
                        if (valueFlag) {
                            nameFlag = true;
                            break;
                        }
                    }
                    if (!nameFlag) {
                        notProvidedFields.push({ name: f.name });
                    }
                }
            }
            if (!notProvidedFields?.length) {
                const productModel = new Product(req.body);
                const savedProduct = await productModel.save();
                super.sendResponse(savedProduct, res);
            }
            else {
                super.sendValidationError(notProvidedFields, res);
            }
        }
        else {
            super.sendValidationError(validationErrors, res);
        }
    }
}