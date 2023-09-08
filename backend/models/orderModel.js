const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  items: [{
    item: {
      type: String,
      required: true
    },
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  isDone: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
