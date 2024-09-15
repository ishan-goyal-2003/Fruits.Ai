const express = require('express');
const FAQ = require('../models/FAQ');
const router = express.Router();

// Get all FAQs
router.get('/', async (req, res) => {
  const faqs = await FAQ.find();
  res.json(faqs);
});

// Get a single FAQ
router.get('/:id', async (req, res) => {
  const faq = await FAQ.findById(req.params.id);
  res.json(faq);
});

// Create a new FAQ
router.post('/', async (req, res) => {
  const newFAQ = new FAQ(req.body);
  await newFAQ.save();
  res.status(201).json(newFAQ);
});

// Update an FAQ
router.put('/:id', async (req, res) => {
  const updatedFAQ = await FAQ.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedFAQ);
});

// Delete an FAQ
router.delete('/:id', async (req, res) => {
  await FAQ.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
