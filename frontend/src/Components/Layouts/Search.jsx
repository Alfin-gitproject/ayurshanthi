import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = ({ onMobileSearchClick }) => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setKeyword(e.target.value);
    // Navigate immediately upon change
    if (e.target.value.trim()) {
      navigate(`/?keyword=${e.target.value}`);
    } else {
      navigate(`/`);
    }
  };

  const handleMobileSearchClick = () => {
    if (onMobileSearchClick) {
      onMobileSearchClick();
    }
  };

  return (
    <div className="form-control">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered bg-slate-100 hidden md:block md:w-auto"
        name="keyword"
        value={keyword}
        onChange={handleChange}
      />
      <button onClick={handleMobileSearchClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 block md:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Search;
