const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
  containerNo: String,
  origin: String,
  destination: String,
  shipName: String,
  status: { type: String, enum: ['created','in_transit','customs','delivered','cancelled'], default: 'created' },
  arrivalDate: Date,
  cost: Number
}, { timestamps: true });

module.exports = mongoose.model('Shipment', shipmentSchema);
