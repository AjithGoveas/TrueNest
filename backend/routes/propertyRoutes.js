const express = require('express');
const {
  getProperties,
  getPropertiesForSale,
  getPropertiesForRent,
  addProperty,
  updateProperty,
  deleteProperty,
  createProperty,
} = require('../controllers/propertyController');

const router = express.Router();

// GET all properties with filters and sorting options
router.get('/', getProperties);

// GET properties specifically for sale
router.get('/sale', getPropertiesForSale);

// GET properties specifically for rent
router.get('/rent', getPropertiesForRent);

// POST a new property (for selling or renting)
router.post('/', addProperty);

// PUT (update) a specific property by ID
router.put('/:id', updateProperty);

// DELETE a property by ID
router.delete('/:id', deleteProperty);

// Define route for submitting a property
router.post('/properties', createProperty);

module.exports = router;
