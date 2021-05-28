import mongoose from 'mongoose';

const CategoryModel = new mongoose.Schema({

    name:String,

    active: Boolean,

    image: String

});

const Category = mongoose.model('category',CategoryModel);

export {Category}