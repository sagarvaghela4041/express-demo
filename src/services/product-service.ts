import { BaseService } from "./services-base";
import { Request, Response } from 'express';
import { PorductDTO } from "../models/product-validation";
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
                for (const field of category_fields.fields) {
                    let nameFlag = false;
                    for (const value of field.values) {
                        const valueFlag = newProduct.fields.find((productField) => {
                            if (productField.name === field.name && productField.value === value) {
                                return true;
                            }
                        });
                        if (valueFlag) {
                            nameFlag = true;
                            break;
                        }
                    }
                    if (!nameFlag) {
                        notProvidedFields.push({ name: field.name });
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

    async searchProduct(req: Request, res: Response): Promise<void> {

        const searchParams = req.body;
        const sort = searchParams.order.direction === 'asc' ? '' : '-';
        const searchResults = await Product.find({
            $or: [{ title: { $regex: (searchParams.title) ? searchParams.title : /./, $options: 'i' } },
            { vendors: { $elemMatch: { price: { $gte: searchParams.price_range?.[0], $lte: searchParams.price_range?.[1] } } } },
            { vendors: { $elemMatch: { _id: searchParams.vendor_id } } },
            { category_id: searchParams.category_id },
            { fields: { $in: searchParams.fields } }]
        }).
            limit(searchParams.limit).skip(searchParams.offset).sort(`${sort} ${searchParams.order.order_by} `);
        super.sendResponse(searchResults, res);

    }

}