const Order = require('../models/Order');
const Book = require('../models/Book');

exports.createOrder = async (req, res) => {
  try {
    const { userId, books, address, totalPrice, paymentInfo } = req.body;
    // reduce stock
    for (const item of books) {
      const book = await Book.findById(item.bookId);
      if (!book) return res.status(400).json({ message: 'Book not found' });
      if (book.stock < item.quantity) return res.status(400).json({ message: `Not enough stock for ${book.title}` });
      book.stock -= item.quantity;
      await book.save();
    }
    const order = await Order.create({ userId, books, address, totalPrice, paymentInfo });
    res.json(order);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getOrdersByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await Order.find({ userId }).populate('books.bookId');
    res.json(orders);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updated = await Order.findByIdAndUpdate(id, { status }, { new: true });
    res.json(updated);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.cancelOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);
    if (!order) return res.status(404).json({ message: 'Not found' });
    // optionally restore stock for cancelled orders
    order.status = 'cancelled';
    await order.save();
    res.json(order);
  } catch (err) { res.status(500).json({ message: err.message }); }
};
