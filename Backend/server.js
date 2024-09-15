// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/faqdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// FAQ Schema
const faqSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
});

const FAQ = mongoose.model('FAQ', faqSchema);

// Routes

// Get all FAQs
app.get('/faqs', async (req, res) => {
    try {
        const faqs = await FAQ.find();
        res.json(faqs);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching FAQs' });
    }
});

// Add a new FAQ
app.post('/faqs', async (req, res) => {
    const { question, answer } = req.body;
    const newFAQ = new FAQ({ question, answer });

    try {
        await newFAQ.save();
        res.status(201).json(newFAQ);
    } catch (err) {
        res.status(400).json({ message: 'Error saving FAQ' });
    }
});

// Update an existing FAQ
app.put('/faqs/:id', async (req, res) => {
    const { question, answer } = req.body;

    try {
        const updatedFAQ = await FAQ.findByIdAndUpdate(req.params.id, { question, answer }, { new: true });
        res.json(updatedFAQ);
    } catch (err) {
        res.status(400).json({ message: 'Error updating FAQ' });
    }
});

// Delete an FAQ
app.delete('/faqs/:id', async (req, res) => {
    try {
        await FAQ.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: 'Error deleting FAQ' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
