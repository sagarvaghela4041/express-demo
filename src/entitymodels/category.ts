import mongoose, { Document, Schema } from 'mongoose';

export interface ICategory extends Document {
    name: string;
    active: boolean;
    image: string;
    fields: [
        {
            name: string,
            values: string[]
        }
    ];
}

const CategoryModel: Schema = new Schema({
    name: {
        type: String,
        index: {
            unique: true
        }
    },
    active: Boolean,
    image: String,
    fields: [
        {
            name: String,
            values: [String]
        }
    ]
});

export const Category = mongoose.model<ICategory>('category', CategoryModel);