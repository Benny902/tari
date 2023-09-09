const Order = require('../models/orderModel');
const mongoose = require('mongoose');

// get all orders
const getOrders = async (req, res) => {
  const orders = await Order.find({}).sort({ createdAt: -1 });

  res.status(200).json(orders);
};

// get a single order
const getOrder = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such order' });
  }

  const order = await Order.findById(id);

  if (!order) {
    return res.status(404).json({ error: 'No such order' });
  }

  res.status(200).json(order);
};

// create a new order
const createOrder = async (req, res) => {
  const { title, phone, items } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push('title');
  }
  if (!phone) {
    emptyFields.push('phone');
  }
  if (!items || !Array.isArray(items) || items.length === 0) {
    emptyFields.push('items');
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: 'חייב לרשום שם + פלאפון + לפחות מוצר אחד', emptyFields });
  }

  try {
    const order = await Order.create({ title, phone, items });
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a order
const deleteOrder = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such order' });
  }

  const order = await Order.findOneAndDelete({ _id: id });

  if (!order) {
    return res.status(400).json({ error: 'No such order' });
  }

  res.status(200).json(order);
};

// update a order
const updateOrder = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such order' });
  }

  try {
    const order = await Order.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true } // Set { new: true } to get the updated order
    );

    if (!order) {
      return res.status(400).json({ error: 'No such order' });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getOrders,
  getOrder,
  createOrder,
  deleteOrder,
  updateOrder,
};
