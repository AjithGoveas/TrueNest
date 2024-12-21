import React, { useEffect } from 'react';
import '../styles/FilterBar.css';

const FilterBar = ({ filters, setFilters, setProperties }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleFetchProperties = async () => {
    try {
      const queryParams = new URLSearchParams(filters).toString();
      const response = await fetch(`/api/properties?${queryParams}`);
      const data = await response.json();
      setProperties(data);
    } catch (error) {
      console.error('Error fetching properties:', error.message);
    }
  };

  useEffect(() => {
    handleFetchProperties();
  }, [filters]); // Fetch data when filters or sorting option changes

  return (
    <div className="filter-bar">
      {/* Type Filter */}
      <select
        name="type"
        value={filters.type || ''}
        onChange={handleInputChange}
        className="filter-input"
      >
        <option value="">Select Type</option>
        <option value="sale">Sale</option>
        <option value="rent">Rent</option>
      </select>

      {/* Rating Filter */}
      <select
        name="rating"
        value={filters.rating || ''}
        onChange={handleInputChange}
        className="filter-input"
      >
        <option value="">Select Rating</option>
        {[1, 2, 3, 4, 5].map((rating) => (
          <option key={rating} value={rating}>
            {rating} Star{rating > 1 ? 's' : ''}
          </option>
        ))}
      </select>

      {/* Price Filters */}
      <div className="price-selects">
        <select
          name="minPrice"
          value={filters.minPrice || ''}
          onChange={handleInputChange}
          className="filter-input"
        >
          <option value="">Min Price</option>
          <option value="10000">10,000</option>
          <option value="50000">50,000</option>
          <option value="100000">100,000</option>
          <option value="500000">500,000</option>
          <option value="1000000">1,000,000</option>
        </select>

        <select
          name="maxPrice"
          value={filters.maxPrice || ''}
          onChange={handleInputChange}
          className="filter-input"
        >
          <option value="">Max Price</option>
          <option value="100000">100,000</option>
          <option value="500000">500,000</option>
          <option value="1000000">1,000,000</option>
          <option value="5000000">5,000,000</option>
          <option value="10000000">10,000,000</option>
        </select>
      </div>

      {/* Sorting Options */}
      <select
        name="sortOption"
        value={filters.sortOption || ''}
        onChange={handleInputChange}
        className="filter-input"
      >
        <option value="">Sort By</option>
        <option value="rating_desc">Rating: High to Low</option>
        <option value="rating_asc">Rating: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
        <option value="price_asc">Price: Low to High</option>
      </select>
    </div>
  );
};

export default FilterBar;
