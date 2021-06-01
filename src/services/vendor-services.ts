import { AddressDTO, VendorDTO } from "../models/vendor-validations";
import { BaseServices } from "./services-base";
import { ValidationServices } from "./validation-service";
import { Request, Response } from 'express';
import { Vendor } from "../entitymodels/vendor";

export class VendorServices extends BaseServices {
    async saveVendor(req: Request, res: Response): Promise<void> {
        const newVendor = new VendorDTO(req.body);
        const newAddress = new AddressDTO(newVendor.address);
        newVendor.address = newAddress;
        const validationServices = new ValidationServices();
        const validationErrors = await validationServices.validateVendorDTO(newVendor);
        if (!validationErrors?.length) {

            const vendorModel = new Vendor(req.body);
            const savedVendor = await vendorModel.save();
            super.sendResponse(savedVendor, res);
        }
        else {
            super.sendValidationError(validationErrors, res);
        }
    }
}