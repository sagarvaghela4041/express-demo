import mongoose from 'mongoose';

const UserModel = new mongoose.Schema({

    first_name: String,

    last_name: String,

    date_of_birth: Date,

    phone: String,
    
    user_name: {
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