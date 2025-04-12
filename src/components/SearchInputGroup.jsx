import React from "react";
import "../styles/SearchInputGroup.scss";

const SearchInputGroup = ({ label, id, type = "text", placeholder }) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} />
    </div>
  );
};

export default SearchInputGroup;
