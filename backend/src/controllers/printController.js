const PrintBatch = require('../models/PrintBatch');

exports.createBatch = async (req, res) => {
  try {
    const batch = await PrintBatch.create(req.body);
    res.json(batch);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getBatchesForBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const batches = await PrintBatch.find({ bookId }).sort({ createdAt: -1 });
    res.json(batches);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.updateBatch = async (req, res) => {
  try {
    const updated = await PrintBatch.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.deleteBatch = async (req, res) => {
  try {
    await PrintBatch.findByIdAndDelete(req.params.id);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ message: err.message }); }
};
