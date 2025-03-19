import React, { useState } from 'react';
import './SearchBar.css'; // Ensure this file includes the improved CSS styles

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value); // Pass the updated query to the parent component
  };

  return (
    <div className="search-bar"> {/* Wrapper to apply container styles */}
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for your favorite music..."
        className="search-input" // Matches the CSS for better effects
      />
      <button 
        onClick={() => onSearch(query)} // Optional: Trigger search on button click
        className="search-button"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
