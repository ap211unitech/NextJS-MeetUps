const mongoose = require('mongoose');

const meetUpSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true
    },
    image: {
        type: String,
        required: [true, 'Image URL is required'],
        trim: true
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
        trim: true
    },
},
    {
        timestamps: true
    }
)

module.exports = mongoose.models.meetups || mongoose.model('meetups', meetUpSchema);