const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  books: [{ bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' }, quantity: Number }],
  totalPrice: Number,
  status: { type: String, enum: ['pending','shipped','delivered','cancelled'], default: 'pending' },
  address: String,
  paymentInfo: { provider: String, transactionId: String, paid: { type: Boolean, default: false } }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
