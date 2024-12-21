// import React from 'react';
// import images from '../assets/images/images';
// import '../styles/PropertyCard.css';

// const PropertyCard = ({ property }) => {
//   const { name, owner, ownerPhone, rating, price, location, imageKey } = property;

//   const imageUrl = images[imageKey] || images['default']; // Get the image URL or fallback to default

//   return (
//     <div className="property-card">
//       <img
//         src={imageUrl}
//         alt={name}
//         className="property-image"
//         onError={(e) => (e.target.src = '/images/default.jpg')}
//       />
//       <div className="property-details">
//         <h3>{name}</h3>
//         <p><strong>Owner:</strong> {owner}</p>
//         <p><strong>Phone:</strong> {ownerPhone}</p>
//         <p><strong>Location:</strong> {location}</p>
//         <p><strong>Price:</strong> ${price.toLocaleString()}</p>
//         <p><strong>Rating:</strong> {'⭐'.repeat(rating)}</p>
//       </div>
//     </div>
//   );
// };

// export default PropertyCard;

import React from 'react';
import images from '../assets/images/images';
import '../styles/PropertyCard.css';

const PropertyCard = ({ property }) => {
  const { name, owner, ownerPhone, rating, price, location, imageKey } = property;

  // Get the image URL using the imageKey or fallback to a default image
  const imageUrl = images[imageKey] || images['default']; 

  return (
    <div className="property-card">
      <div className="property-image-wrapper">
        <img
          src={imageUrl}
          alt={name}
          className="property-image"
          onError={(e) => (e.target.src = '/images/default.jpg')} // Fallback to default image if the image fails to load
        />
      </div>
      <div className="property-details">
        <h3>{name}</h3>
        <p><strong>Price:</strong> ${price.toLocaleString()}</p>
        <p><strong>Rating:</strong> {'⭐'.repeat(rating)}</p>
        <p><strong>Owner:</strong> {owner}</p>
        <p><strong>Phone:</strong> {ownerPhone}</p>
        <p><strong>Location:</strong> {location}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
