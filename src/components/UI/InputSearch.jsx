import PropTypes from "prop-types";
import { Search } from "lucide-react";
import "../../index.css";

export function InputSearch({ placeholder, setSearch }) {
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <form className="flex items-center rounded-lg bg-white border dark:bg-clr-dark-gray/40 border-gray-300 dark:border-gray-600 focus-within:ring-1 focus-within:ring-indigo-500 dark:focus-within:ring-indigo-500 h-full p-2 md:w-full">
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleInputChange}
        className="px-3 py-2 bg-transparent text-black dark:text-clr-light-gray focus:outline-none flex-grow"
      />
      <div className="p-2 text-black dark:text-clr-light-gray">
        <Search
          size="20"
          className="transition-transform transform hover:scale-110 text-clr-blue dark:text-clr-light-gray"
        />
      </div>
    </form>
  );
}

InputSearch.propTypes = {
  placeholder: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

InputSearch.defaultProps = {
  placeholder: "Search...",
};
