import { Document, model, Schema } from 'mongoose';

export interface IProduct extends Document {
    title: string;
    vendors: [
        {
            price: number,
            quantity: number,
            delivery_area_zipcodes: number[]
        }
    ];
    images: string[];
}

const ProductModel: Schema = new Schema({
    title: String,
    vendors: [
        {
            price: Number,
            quantity: Number,
            delivery_area_zipcodes: [Number]
        }
    ],
    images: [String]
});

export const Product = model<IProduct>('product', ProductModel);
