import React, { useState, useEffect } from 'react';
import '../styles/Buying.css';
import PropertyCard from '../components/PropertyCard';
import FilterBar from '../components/FilterBar';

const Buying = () => {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    rating: '',
  });
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    fetchProperties();
  }, [filters, sortOption]); // Trigger fetch when filters or sortOption changes

  const fetchProperties = async () => {
    try {
      // Construct query parameters from filters and sortOption
      const queryParams = new URLSearchParams({
        ...filters,
        sortOption, // Include sortOption in query parameters
      }).toString();

      const response = await fetch(`http://localhost:5000/api/properties?${queryParams}`);
      const data = await response.json();
      setProperties(data);
    } catch (error) {
      console.error('Error fetching properties:', error.message);
    }
  };

  return (
    <div className="buying-page">
      <h1 className='buying-heading'>Properties for Sale</h1>
      
      {/* FilterBar Component for user to set filters and sort option */}
      <FilterBar
        filters={filters}
        setFilters={setFilters}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />

      {/* Property list display */}
      <div className="property-list">
        {properties.length > 0 ? (
          properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))
        ) : (
          <p>No properties found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Buying;
