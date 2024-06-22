import React from "react";
import { useSelectedOption } from "../../global/selectedOptionContext";
import PropTypes from "prop-types";

export function FilterSelect({ items, responsive = false, onChange }) {
    const { selectedOption } = useSelectedOption(); // Obtain the selected option from the context

    return (
        <select className={`bg-clr-light-gray/25 text-clr-dark-gray dark:bg-clr-dark-gray/30 dark:text-clr-light-gray py-2 px-4 cursor-pointer rounded-md focus:outline-none ${responsive ? 'lg:w-full' : ''}`} onChange={onChange} value={selectedOption}>
            {items.map(item => (
                <option key={item.id} value={item.id}>
                    {item.name}
                </option>
            ))}
        </select>
    );
}

FilterSelect.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
    responsive: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};

FilterSelect.defaultProps = {
    items: [],
    responsive: false,
};
