const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  items: [{
    item: {
      type: String,
      required: true
    },
    reps: {
      type: String,
      required: true
    }
  }]
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
