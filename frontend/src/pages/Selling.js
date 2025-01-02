import React, { useState } from 'react';
import '../styles/Selling.css';

const Selling = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    price: '',
    location: '',
    rating: '',
    owner: '',
    ownerPhone: '',
  });

  const [images, setImages] = useState([]);
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    images.forEach((image) => data.append('images', image));

    try {
      const response = await fetch('http://localhost:5000/api/properties', {
        method: 'POST',
        body: data,
      });
      const result = await response.json();
      if (response.ok) {
        setMessage('Property listed successfully!');
      } else {
        setMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="selling-page">
      <h1 className="selling-heading">Sell or Rent Your Property</h1>
      <form className="selling-form" onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Property Name</label>
          <input
            type="text"
            id='name'
            name="name"
            placeholder="Enter Property Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='form-group'>
        <label htmlFor='type'>Property Type</label>
          <select
            name="type"
            id='type'
            value={formData.type}
            onChange={handleInputChange}
            required >
            <option value="">Select Type</option>
            <option value="sale">Sale</option>
            <option value="rent">Rent</option>
          </select>
        </div> 
        <div className='form-group'>
          <label htmlFor='price'>Price</label>
          <input
            type="number"
            name="price"
            id='price'
            placeholder="Enter Price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='location'>Location</label>
          <input
            type="text"
            name="location"
            id='location'
            placeholder="Enter Location"
            value={formData.location}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='rating'>Location</label>
          <input
            type="number"
            name="rating"
            id='rating'
            placeholder="Rating (1-5)"
            value={formData.rating}
            onChange={handleInputChange}
            min="1"
            max="5"
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='owner'>Owner Name</label>
          <input
            type="text"
            name="owner"
            id='owner'
            placeholder="Enter Owner Name"
            value={formData.owner}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='ownerPhone'>Owner Phone</label>
          <input
            type="text"
            name="ownerPhone"
            id='ownerPhone'
            placeholder="Owner Phone"
            value={formData.ownerPhone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='pictures'>Upload Pictures</label>
          <input
            className="file-input"
            id='pictures'
            type="file" multiple
            onChange={handleImageChange}
            accept="image/*"
            required
          />
        </div>
        <button type="submit" className='submit-btn'>Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Selling;
