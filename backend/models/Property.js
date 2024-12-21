const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  name: { type: String, required: true },
  owner: { type: String, required: true },
  ownerPhone: { type: String, required: true },
  rating: { type: Number, required: true, min: 0, max: 5 },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  type: { type: String, enum: ['sale', 'rent'], required: true },
  imageKey: { type: String, required: true },
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
