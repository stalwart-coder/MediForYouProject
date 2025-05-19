const mongoose = require('mongoose');

const ambulanceSchema = new mongoose.Schema({
    name: String,
    phone: String,
    location: String,
    emergencyType: String,
}, { timestamps: true });

module.exports = mongoose.model('Ambulance', ambulanceSchema);
