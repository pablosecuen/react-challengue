/* eslint-disable react/prop-types */
import { useState } from "react";
import "./searchbar.css";
const SearchBar = ({ onSearch }) => {
  // eslint-disable-next-line no-undef
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <search className="searchbar">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3">
          <circle cx="11.0647" cy="11.0647" r="6.31471" stroke="#0F0D23" strokeWidth="1.5" />
          <path
            d="M16.0924 15.8441L19 18.6466"
            stroke="#0F0D23"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
      </svg>
      <input
        value={searchTerm}
        onChange={handleChange}
        className="input-search"
        placeholder="Search burger, pizza, drink or ect..."
      />
    </search>
  );
};

export default SearchBar;
