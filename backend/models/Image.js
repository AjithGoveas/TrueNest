const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  imageKey: { type: String, required: true, unique: true },
  imageUrl: { type: String, required: true },
});

const Image = mongoose.model('Image', imageSchema);
module.exports = Image;
