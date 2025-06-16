const { faqService } = require('../services');

const getAllFaqs = async (req, res) => {
  try {
    const faqs = await faqService.getAllFaqs();
    res.status(200).json({ message: 'FAQs fetched successfully', data: faqs });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch FAQs', error: err.message });
  }
};

const createFaq = async (req, res) => {
  try {
    const faq = await faqService.createFaq(req.body);
    res.status(201).json({ message: 'FAQ created successfully', data: faq });
  } catch (err) {
    res.status(400).json({ message: 'Failed to create FAQ', error: err.message });
  }
};

module.exports = {
  getAllFaqs,
  createFaq
};
