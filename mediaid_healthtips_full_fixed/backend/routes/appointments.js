const express = require('express');
const router = express.Router();

const Appointment = require('../models/Appointment');

router.post('/', async (req, res) => {
    const { name, email, phone, date, message } = req.body;

    try {
        const appointment = new Appointment({ name, email, phone, date, message });
        await appointment.save();
        res.json({ message: 'Appointment booked successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
