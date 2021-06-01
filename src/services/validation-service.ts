import { validate, ValidationError } from "class-validator";
import { CategoryDTO } from "../models/category-validation";
import { RegistraionDTO } from "../models/user-validation";

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
        }
        return response;
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



}
