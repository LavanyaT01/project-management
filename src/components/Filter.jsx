import React from 'react';

const Filter = ({ onFilterChange }) => {
    return (
        <div className="filter">
            <label htmlFor="status">Status:</label>
            <select id="status" onChange={(e) => onFilterChange('status', e.target.value)}>
                <option value="">All</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
            </select>

            <label htmlFor="date">Date:</label>
            <input
                type="date"
                id="date"
                onChange={(e) => onFilterChange('date', e.target.value)}
            />
        </div>
    );
};

export default Filter;