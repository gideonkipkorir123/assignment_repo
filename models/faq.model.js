const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
  question: {
    en: { type: String, required: true },
    fr: { type: String, required: true }
  },
  answer: {
    en: { type: String, required: true },
    fr: { type: String, required: true }
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Faq', faqSchema);
