const express = require('express');
const router = express.Router();

const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const contact = new Contact({ name, email, message });
        await contact.save();
        res.json({ message: 'Contact message received successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
