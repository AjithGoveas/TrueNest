const express = require('express');
const router = express.Router();
const Image = require('../models/Image');

// Add an image
router.post('/', async (req, res) => {
  const { imageKey, imageUrl } = req.body;

  try {
    const newImage = new Image({ imageKey, imageUrl });
    await newImage.save();
    res.status(201).json({ message: 'Image added successfully', data: newImage });
  } catch (error) {
    res.status(500).json({ message: 'Error adding image', error: error.message });
  }
});

// Get image details
router.get('/:imageKey', async (req, res) => {
  const { imageKey } = req.params;

  try {
    const image = await Image.findOne({ imageKey });
    if (!image) return res.status(404).json({ message: 'Image not found' });
    res.status(200).json(image);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching image', error: error.message });
  }
});

module.exports = router;
