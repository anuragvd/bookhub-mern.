const Book = require('../models/Book');

exports.createBook = async (req, res) => {
  try {
    const b = await Book.create(req.body);
    res.json(b);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getBooks = async (req, res) => {
  try {
    const { q, category, author } = req.query;
    const filter = {};
    if (category) filter.category = category;
    if (author) filter.author = author;
    if (q) filter.title = new RegExp(q, 'i');
    const books = await Book.find(filter).sort({ createdAt: -1 });
    res.json(books);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Not found' });
    res.json(book);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.updateBook = async (req, res) => {
  try {
    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ message: err.message }); }
};
