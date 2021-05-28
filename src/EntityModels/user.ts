import mongoose from 'mongoose';

const UserModel = new mongoose.Schema({

    firstName: String,

    lastName: String,

    dateOfBirth: Date,

    phone: String,
    
    userName: {
        type: String,
        index: {
            unique: true
        }
    },

    password: String,

    token: String,


});

const User = mongoose.model('UserAuth',UserModel);

export {User}