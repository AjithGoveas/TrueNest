import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);  // Debug to check if data is being captured
  
    fetch("http://localhost:5000/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),  // Send the form data as JSON
    })
      .then(response => response.json())
      .then(data => {
        alert("Thank you for contacting us!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch(error => {
        console.error("Error:", error);
        alert("There was an error. Please try again.");
      });
  };
  

  return (
    <div className="contact-page">
      <h1 className="contact-heading">Contact Us</h1>
      <div className="contact-container">
        {/* Proprietor Cards */}
        <div className="proprietor-cards">
        <div className="card">
            <img src="proprietor1.jpg" alt="Proprietor 1" />
            <div className="card-content">
                <h3>Proprietor 1</h3>
                <p><strong>Name:</strong> John Doe</p>
                <p><strong>Phone:</strong> +1-234-567-890</p>
                <p><strong>Email:</strong> johndoe@example.com</p>
                <div class="social-icons">
                    <a href="#" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-x-twitter"></i></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </div>

            <div className="card">
                <img src="/path-to-image/jane-smith.jpg" alt="Jane Smith" />
                <div className="card-content">
                <h3>Proprietor 2</h3>
                <p><strong>Name:</strong> Jane Smith</p>
                <p><strong>Phone:</strong> +1-987-654-321</p>
                <p><strong>Email:</strong> janesmith@example.com</p>
                <div class="social-icons">
                    <a href="#" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-x-twitter"></i></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>
                </div>
                </div>
            </div>
        </div>


        {/* Contact Form */}
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <h3>Find Our Nearest Shop</h3>
          <iframe
            title="Shop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.933673114475!2d-122.08424968468363!3d37.421999979826485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5e3e567f7b3%3A0x2c27e2e2e2a2a2e2!2sGoogleplex!5e0!3m2!1sen!2sus!4v1634329653200!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
