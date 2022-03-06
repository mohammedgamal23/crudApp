const mongoose = require('mongoose');
const validator = require('validator')

var schema = mongoose.Schema({
    name: {
        type:String,
        required: true,
        min:3,
        max:20,
        trim:true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    title: {
        type:String,
        required:true
    },
    phone: {
        type:Number,
        required:true,
        min:10
    }
})

schema.method("toJSON", function(){
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})

const userModel = mongoose.model('user', schema, 'users')


module.exports = userModel