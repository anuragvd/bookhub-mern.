const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  price: { type: Number, default: 0 },
  stock: { type: Number, default: 0 },
  category: String,
  ISBN: String,
  coverImage: String,
  description: String
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
