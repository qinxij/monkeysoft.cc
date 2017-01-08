const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
  paymentId: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  soft: { type: String, required: true },
  state: { type: String, required: true },
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  saleId: { type: String },
  payerEmail: { type: String },
  payerId: { type: String },
  createdAt: { type: Date }
});

const noop = function () {};

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
