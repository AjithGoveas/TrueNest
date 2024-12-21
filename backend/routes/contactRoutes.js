const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/contacts", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    });

    await newContact.save();
    res.status(200).json({ message: "Form data saved successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error saving form data" });
  }
});

module.exports = router;
