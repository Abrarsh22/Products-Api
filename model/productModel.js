const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required : [true,"Name is Mandatory"]
    },
    price : {
        type : Number,
        required : [true,"Price is Mandatory"]
    },
    featured : {
        type : Boolean,
        default : false
    },
    rating : {
        type : Number,
        default : 4.9,
    },
    date : {
        type : Date,
        default : Date.now(),
    },
    company :{
        type:String,
        enum:{
            values : ["apple","samsung","sony","dell","mi"],
            message : `{VALUE} is not supported`,
        },
    }
});

module.exports = mongoose.model('Product',productSchema);