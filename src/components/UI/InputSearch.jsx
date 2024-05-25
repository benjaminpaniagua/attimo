import React from "react";
import {Search} from "lucide-react";
import PropTypes from "prop-types";
import "../../index.css";

export function InputSearch({ placeholder }) {
    return (
      <div className="flex justify-between px-4 bg-clr-light-gray/25 dark:bg-clr-dark-gray/30 rounded-md overflow-hidden text-clr-dark-bg">
        <input
          className="w-full py-2 placeholder:text-clr-dark-gray bg-transparent dark:placeholder:text-clr-light-gray cursor-pointer focus:outline-none"
          type="text"
          placeholder={placeholder} 
          name="search"
        />
        <Search size={18} className="text-clr-dark-gray m-auto h-full dark:text-clr-light-gray" />
      </div>
    );
  }

InputSearch.propTypes = {
    placeholder: PropTypes.string.isRequired,
};

InputSearch.defaultProps = {
    placeholder: "Search...",
};