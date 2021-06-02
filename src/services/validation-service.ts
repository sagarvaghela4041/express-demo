import { validate, ValidationError } from "class-validator";
import { CategoryDTO } from "../models/category-validation";
import { PorductDTO } from "../models/product-validation";
import { RegistraionDTO } from "../models/user-validation";
import { VendorDTO } from "../models/vendor-validation";

export class ValidationServices {

    async validateUserDTO(user: RegistraionDTO): Promise<ValidationError[]> {

        const validationErrors = await validate(user);
        if (validationErrors.length > 0) {
            return this.createResponse(validationErrors);
        }
        else {
            return [];
        }
    }

    async validateCredentials(user: RegistraionDTO): Promise<ValidationError[]> {

        const validationErrors = await validate(user, { groups: ['credentials'] });
        if (validationErrors.length > 0) {
            return this.createResponse(validationErrors);
        }
        else {
            return [];
        }
    }

    createResponse(validationErrors: ValidationError[]): ValidationError[] {
        const response = [];
        for (const validationError of validationErrors) {
            const error = {
                property: validationError.property,
                constraints: validationError.constraints
            }
            response.push(error);
            if (validationError.children) {
                const errorFromChild = this.createChildObjectErrorResponse(validationError.children) as any;
                if (errorFromChild?.length) {
                    response.push(errorFromChild);
                }
            }
        }
        return response;
    }

    createChildObjectErrorResponse(validationError: ValidationError[]): { property: string, constraint: any }[] {
        const childConstraints = [];
        for (const childConstraint of validationError) {
            const childError = {
                property: childConstraint.property,
                constraint: childConstraint.constraints
            }
            childConstraints.push(childError);
            if (childConstraint.children) {
                const errorFromChild = this.createChildObjectErrorResponse(childConstraint.children) as any;
                if (errorFromChild?.length) {
                    childConstraints.push(errorFromChild);
                }
            }

        }
        return (childConstraints as { property: string, constraint: any }[]);
    }


    async validateCategoryDTO(category: CategoryDTO): Promise<ValidationError[]> {
        const validationErrors = await validate(category);
        if (validationErrors.length > 0) {
            return this.createResponse(validationErrors);
        }
        else {
            return [];
        }
    }

    async validateVendorDTO(vendor: VendorDTO): Promise<ValidationError[]> {
        const validationErrors = await validate(vendor);
        if (validationErrors.length > 0) {
            return this.createResponse(validationErrors);
        }
        else {
            return [];
        }
    }

    async validateProductDTO(product: PorductDTO): Promise<ValidationError[]> {
        const validationErrors = await validate(product);
        if (validationErrors.length > 0) {
            return this.createResponse(validationErrors);
        }
        else {
            return [];
        }
    }

}
