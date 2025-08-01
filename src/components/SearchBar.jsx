import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search tasks/projects..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;