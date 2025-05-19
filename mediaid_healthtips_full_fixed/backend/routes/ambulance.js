const express = require('express');
const router = express.Router();

const Ambulance = require('../models/Ambulance');

router.post('/', async (req, res) => {
    const { name, phone, location, emergencyType } = req.body;

    try {
        const ambulanceRequest = new Ambulance({ name, phone, location, emergencyType });
        await ambulanceRequest.save();
        res.json({ message: 'Ambulance request submitted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
