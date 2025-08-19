const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  rate: Number,
  image: String, // image path or URL
});

module.exports = mongoose.model('Product', productSchema);
