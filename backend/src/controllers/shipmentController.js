const Shipment = require('../models/Shipment');

exports.createShipment = async (req, res) => {
  try {
    const s = await Shipment.create(req.body);
    res.json(s);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getShipments = async (req, res) => {
  try {
    const { country, status } = req.query;
    const filter = {};
    if (country) filter.destination = new RegExp(country, 'i');
    if (status) filter.status = status;
    const list = await Shipment.find(filter).sort({ createdAt: -1 });
    res.json(list);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.updateShipmentStatus = async (req, res) => {
  try {
    const updated = await Shipment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.deleteShipment = async (req, res) => {
  try {
    await Shipment.findByIdAndDelete(req.params.id);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ message: err.message }); }
};
