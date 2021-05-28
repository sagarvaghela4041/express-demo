import mongoose from 'mongoose';

const ErrorModel = new mongoose.Schema({

    error_name:String,
    error_message:Object,
    api:String,
    created_date:Date,
    created_by:String

});

const ErrorLog = mongoose.model('error_log',ErrorModel);

export {ErrorLog}