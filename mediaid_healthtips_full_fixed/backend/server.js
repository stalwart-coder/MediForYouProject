const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Serve frontend static files (from public folder)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const authRoutes = require('./routes/auth');
const appointmentRoutes = require('./routes/appointments');
const ambulanceRoutes = require('./routes/ambulance');
const contactRoutes = require('./routes/contact');
const orderRoutes = require('./routes/order.routes'); // Razorpay/Payment orders


// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/ambulance', ambulanceRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/users', require('./routes/userRoutes'));

// Handle unknown API routes with JSON error
app.use('/api', (req, res) => {
  res.status(404).json({ error: 'API route not found' });
});

app.use('/api/users', authRoutes);               // User login/register
app.use('/api/orders', orderRoutes);             // Payment orders
app.use('/api/appointments', appointmentRoutes); // Book appointments
app.use('/api/ambulance', ambulanceRoutes);      // Ambulance requests
app.use('/api/contact', contactRoutes);          // Contact form/messages

// Root route - send index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Catch-all route (for SPA routing if needed)
// Catch-all route (for SPA routing if needed)
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
