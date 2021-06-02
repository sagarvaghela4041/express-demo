import { AddressDTO, VendorDTO } from "../models/vendor-validation";
import { BaseService } from "./services-base";
import { ValidationServices } from "./validation-service";
import { Request, Response } from 'express';
import { Vendor } from "../entitymodels/vendor";
import { messages } from "../constants/messages";

export class VendorServices extends BaseService {
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

    async updateFullVendor(req: Request, res: Response): Promise<void> {
        const newVendor = new VendorDTO(req.body);
        const newAddress = new AddressDTO(newVendor.address);
        newVendor.address = newAddress;
        const validationServices = new ValidationServices();
        const validationErrors = await validationServices.validateVendorDTO(newVendor);

        if (!validationErrors?.length) {

            const id = req.params.id;
            const vendor = await Vendor.findById(id);
            if (!vendor) {
                super.sendValidationError({ message: messages.vendor_not_found }, res);
            }
            else {
                await Vendor.updateOne({ _id: id }, newVendor);
                super.sendResponse(newVendor, res);
            }
        }
        else {
            super.sendValidationError({ message: validationErrors }, res);
        }
    }

    async deleteVendor(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        const vendor = await Vendor.findById(id);
        if (!vendor) {
            super.sendValidationError({ message: messages.vendor_not_found }, res)
        }
        else {
            await Vendor.deleteOne({ _id: id });
            super.sendResponse(vendor, res);
        }
    }

    async getVendor(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        const vendor = await Vendor.findById(id);
        if (!vendor) {
            super.sendValidationError({ message: messages.vendor_not_found }, res);
        }
        else {
            super.sendResponse(vendor, res);
        }
    }

    async updateVendor(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        const vendorToUpdate = await Vendor.findById(id);
        if (!vendorToUpdate) {
            super.sendValidationError({ message: messages.vendor_not_found }, res);
        }
        else {
            const newVendor = req.body;
            const tempVendor = JSON.parse(JSON.stringify(vendorToUpdate));
            for (const p in tempVendor) {
                newVendor[p] = newVendor[p] ? newVendor[p] : tempVendor[p];
            }
            await Vendor.updateOne({ _id: id }, newVendor);
            super.sendResponse(newVendor, res);
        }
    }

    async searchVendor(req: Request, res: Response): Promise<void> {
        const searchParams = req.body;
        const sort = searchParams.order.direction === 'asc' ? '' : '-';
        const searchResults = await Vendor.find({ $and: [{ name: searchParams.name }, { email: searchParams.email }] }).
            limit(searchParams.limit).skip(searchParams.offset).sort(`${sort}${searchParams.order.order_by}`);
        super.sendResponse(searchResults, res);

    }
}