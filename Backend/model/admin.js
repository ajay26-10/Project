const { Schema } = require ('mongoose')
const { model} =require('mongoose');
const demo = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true},
 });

 const admindetails = model('AdminCredentials', demo);
module.exports=admindetails;