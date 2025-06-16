const mongoose = require('mongoose');

const outletSchema = new mongoose.Schema({
  name: { type: String, required: true },
  coordinates: {
    lat: Number,
    lng: Number
  },
  region: String,
  productCategories: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Outlet', outletSchema);
