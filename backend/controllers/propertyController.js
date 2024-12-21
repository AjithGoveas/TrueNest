const Property = require('../models/Property');
const multer = require('multer');
const path = require('path');

// Set storage engine for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './assets/images/'); // Store images in assets/images folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Set a unique filename
  },
});

// Initialize upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
}).array('images', 5); // Support multiple files (up to 5 images)

exports.createProperty = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(400).send({ message: err.message });
    }

    const imageUrls = req.files.map(file => `/images/${file.filename}`);
    const propertyData = {
      name: req.body.name,
      type: req.body.type,
      price: req.body.price,
      location: req.body.location,
      rating: req.body.rating,
      owner: req.body.owner,
      ownerPhone: req.body.ownerPhone,
      images: imageUrls, // Save the paths to the uploaded images
    };

    // You can save the property data to the database here (omitted in this example)
    console.log('Property Submitted:', propertyData);
    res.status(200).send({ message: 'Property listed successfully!', property: propertyData });
  });
};

// Fetch all properties with filters and sorting options
exports.getProperties = async (req, res) => {
  try {
    const { type, location, minPrice, maxPrice, rating, sortOption } = req.query;

    // Build query object for filters
    let query = {};

    if (type) query.type = type;
    if (location) query.location = { $regex: location, $options: 'i' }; // Case-insensitive match for location
    if (minPrice) query.price = { $gte: parseInt(minPrice) };
    if (maxPrice) query.price = { $lte: parseInt(maxPrice) };
    if (rating) query.rating = { $gte: parseInt(rating) };

    // Sorting options
    let sort = {};
    if (sortOption) {
      const [field, order] = sortOption.split('_');
      sort[field] = order === 'asc' ? 1 : -1; // Ascending or descending based on 'asc' or 'desc'
    }

    // Fetch the properties based on the query and sorting
    const properties = await Property.find(query).sort(sort);

    // Return the properties as response
    res.status(200).json(properties);
  } catch (error) {
    console.error('Error fetching properties:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Fetch properties for sale with filters
exports.getPropertiesForSale = async (req, res) => {
  try {
    const { location, minPrice, maxPrice, rating, sortOption } = req.query;

    // Build a query object for filtering properties of type 'sale'
    let query = { type: 'sale' };

    if (location) query.location = { $regex: location, $options: 'i' }; // Case-insensitive match for location
    if (minPrice) query.price = { ...query.price, $gte: parseInt(minPrice) };
    if (maxPrice) query.price = { ...query.price, $lte: parseInt(maxPrice) };
    if (rating) query.rating = { $gte: parseInt(rating) };

    // Sorting options
    let sort = {};
    if (sortOption) {
      const [field, order] = sortOption.split('_');
      sort[field] = order === 'asc' ? 1 : -1; // Ascending or descending based on 'asc' or 'desc'
    }

    // Fetch the properties based on the query and sorting
    const properties = await Property.find(query).sort(sort);

    // Return the properties as response
    res.status(200).json(properties);
  } catch (error) {
    console.error('Error fetching properties for sale:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Fetch properties for rent with filters
exports.getPropertiesForRent = async (req, res) => {
  try {
    const { location, minPrice, maxPrice, rating, sortOption } = req.query;

    // Build a query object for filtering properties of type 'rent'
    let query = { type: 'rent' };

    if (location) query.location = { $regex: location, $options: 'i' }; // Case-insensitive match for location
    if (minPrice) query.price = { ...query.price, $gte: parseInt(minPrice) };
    if (maxPrice) query.price = { ...query.price, $lte: parseInt(maxPrice) };
    if (rating) query.rating = { $gte: parseInt(rating) };

    // Sorting options
    let sort = {};
    if (sortOption) {
      const [field, order] = sortOption.split('_');
      sort[field] = order === 'asc' ? 1 : -1; // Ascending or descending based on 'asc' or 'desc'
    }

    // Fetch the properties based on the query and sorting
    const properties = await Property.find(query).sort(sort);

    // Return the properties as response
    res.status(200).json(properties);
  } catch (error) {
    console.error('Error fetching properties for rent:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Add a new property to the database
exports.addProperty = async (req, res) => {
  try {
    const { name, owner, ownerPhone, rating, price, location, type, imageKey } = req.body;

    // Create a new Property object
    const newProperty = new Property({
      name,
      owner,
      ownerPhone,
      rating,
      price,
      location,
      type,
      imageKey,
    });

    // Save the new property to the database
    await newProperty.save();

    // Return success response
    res.status(201).json({ message: 'Property added successfully', property: newProperty });
  } catch (error) {
    console.error('Error adding property:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a property in the database
exports.updateProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, owner, ownerPhone, rating, price, location, type, imageKey } = req.body;

    // Find the property by ID and update it
    const updatedProperty = await Property.findByIdAndUpdate(id, {
      name,
      owner,
      ownerPhone,
      rating,
      price,
      location,
      type,
      imageKey,
    }, { new: true });

    if (!updatedProperty) {
      return res.status(404).json({ error: 'Property not found' });
    }

    // Return success response
    res.status(200).json({ message: 'Property updated successfully', property: updatedProperty });
  } catch (error) {
    console.error('Error updating property:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a property from the database
exports.deleteProperty = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the property by ID and delete it
    const deletedProperty = await Property.findByIdAndDelete(id);

    if (!deletedProperty) {
      return res.status(404).json({ error: 'Property not found' });
    }

    // Return success response
    res.status(200).json({ message: 'Property deleted successfully' });
  } catch (error) {
    console.error('Error deleting property:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};
