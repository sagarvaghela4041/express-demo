import { validate, ValidationError } from "class-validator";
import { CategoryDTO } from "../models/category-validation";
import { RegistraionDTO } from "../models/user-validation";

export class ValidationServices {

    async validateUserDTO(user: RegistraionDTO) {

        const isValidUser = await validate(user);
        if (isValidUser.length > 0) {
            return this.createResponse(isValidUser);
        }
    }
    
    async validateCredentials(user: RegistraionDTO) {
    
        const isValid = await validate(user, { groups: ['credentials'] });
        if (isValid.length > 0) {
            return this.createResponse(isValid);
        }
    }
    
    createResponse(validationErrors:ValidationError[]){
        const response = [];
        for(const validationError of validationErrors){
            const error = {
                property: validationError.property,
                constraints: validationError.constraints
            }
            response.push(error);
        }
        return response;
    }

    
    async validateCategoryDTO(category: CategoryDTO) {
        const isValidCategory = await validate(category);
        if (isValidCategory.length > 0) {
            return this.createResponse(isValidCategory);
        }
    }



}
