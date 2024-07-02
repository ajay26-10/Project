const { Schema} =require('mongoose');
const { model} =require('mongoose');
const projectSchema = new Schema({
    title: { type: String, required: true },
    tagline: { type: String, required: true },
    description: { type: String, required: true },
    targetAmount: { type: Number, required: true },
    pledgedAmount: { type: Number, default: 0 },
    image: { type: String },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Project = model('projecdetails', projectSchema)
module.exports = Project;
