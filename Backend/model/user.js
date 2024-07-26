const { Schema} =require('mongoose');
const { model} =require('mongoose');
const demo = new Schema({
   name: { type: String, required: true },
   email: { type: String, required: true },
   password: { type: String, required: true},
});

const userdetails = model('userdetails', demo);
module.exports=userdetails;