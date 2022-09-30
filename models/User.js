import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const userModel = new Schema({
    email:{ type: String, required: true },
    Name:{ type: String, required: true },
    DOB:{ type: String, required: true },
    collegeName:{type: String, required: true},
    orderId:{type: String},
    plan:{type:String},
    planId:{type:Number}
},
{ timestamps: true })

module.exports = mongoose.models.User ||  mongoose.model("User", userModel);