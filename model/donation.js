const { Schema} = require ('mongoose');
const { model} = require ('mongoose');

const donationSchema = new Schema({
    amount: { type: Number, required: true },
    project: { type: Schema.Types.ObjectId, ref: 'Project' },
    donor: { type: Schema.Types.ObjectId, ref: 'User' },
});

const donation = model('donationdetails', donationSchema)
module.exports = donation;
