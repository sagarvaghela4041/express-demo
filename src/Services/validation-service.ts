import { validate, ValidationError } from "class-validator";
import { RegistraionDTO } from "../Models/user-validation";

export class ValidationServices {

    async validateDTO(user: RegistraionDTO) {

        const check = await validate(user);
        if (check.length > 0) {
            return this.createResponse(check);
        }
    }
    
    async validateCredentials(user: RegistraionDTO) {
    
        const check = await validate(user, { groups: ['credentials'] });
        if (check.length > 0) {
            return this.createResponse(check);
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

}
