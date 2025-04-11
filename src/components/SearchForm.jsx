import React, { useState } from "react";
import "../styles/SearchForm.scss";

const SearchForm = () => {
  const [formData, setFormData] = useState({
    city: "",
    accommodation: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="search-container">
      <div className="search-form">
        <div className="input-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter city name"
          />
        </div>

        <div className="input-group">
          <label htmlFor="accommodation">Accommodation</label>
          <input
            type="text"
            id="accommodation"
            name="accommodation"
            value={formData.accommodation}
            onChange={handleChange}
            placeholder="Enter accommodation name or address"
          />
        </div>

        <div className="date-range">
          <div className="input-group">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <button className="search-button">Search Matches</button>
      </div>
    </div>
  );
};

export default SearchForm;
