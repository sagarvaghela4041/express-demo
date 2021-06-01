import { Document, model, Schema } from 'mongoose';

export interface IVendor extends Document {
    name: string;
    email: string;
    phone_number: string;
    address: {
        line_1: string,
        line_2: string,
        state: string,
        city: string,
        zip: string
    }
}
const VendorModel: Schema = new Schema({
    name: String,
    email: String,
    phone_number: String,
    address: {
        line_1: String,
        line_2: String,
        state: String,
        city: String,
        zip: String
    }
});
export const Vendor = model<IVendor>('vendor', VendorModel);