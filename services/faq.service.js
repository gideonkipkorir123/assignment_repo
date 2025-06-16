const { Faq } = require('../models');

const getAllFaqs = async () => {
  return await Faq.find();
};

const createFaq = async (data) => {
  return await Faq.create(data);
};

module.exports = {
  getAllFaqs,
  createFaq
};
