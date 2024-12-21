const Contact = require('../models/Contact');

const submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    });

    await newContact.save();  // Save the form data to MongoDB

    res.status(200).json({ message: "Contact form submitted successfully!" });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ error: "Failed to submit the contact form." });
  }
};

module.exports = { submitContactForm };
