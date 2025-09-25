const mongoose = require('mongoose');

const printBatchSchema = new mongoose.Schema({
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  quantity: Number,
  cost: Number,
  printDate: { type: Date, default: Date.now },
  notes: String
}, { timestamps: true });

module.exports = mongoose.model('PrintBatch', printBatchSchema);
