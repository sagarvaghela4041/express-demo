import { validate, ValidationError } from "class-validator";
import { CategoryDTO } from "../models/category-validation";
import { RegistraionDTO } from "../models/user-validation";
import { VendorDTO } from "../models/vendor-validations";

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
                const r = this.createChildObjectErrorResponse(validationError.children) as any;
                response.push(r);
            }
        }
        return response;
    }

    createChildObjectErrorResponse(validationError: ValidationError[]) {
        const childConstraints = [];
        for (const childConstraint of validationError) {
            const childError = {
                property: childConstraint.property,
                constraint: childConstraint.constraints
            }
            childConstraints.push(childError);
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



}
