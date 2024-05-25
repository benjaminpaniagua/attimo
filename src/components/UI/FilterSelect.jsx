import "../../index.css";
import PropTypes from "prop-types";
export function FilterSelect({items, responsive=false}) {
    return (
        <>
            <select className={`bg-clr-light-gray/25 text-clr-dark-gray dark:bg-clr-dark-gray/30 dark:text-clr-light-gray py-2 px-4 cursor-pointer rounded-md focus:outline-none ${responsive ? 'lg:w-full' : ''}`}>
                {items.map(item => (
                    <option key={item.id} value={item.title}>
                        {item.title}
                    </option>
                ))}
            </select>
        </>
    );
}

FilterSelect.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
    responsive: PropTypes.bool,
};

FilterSelect.defaultProps = {
    items: [],
    responsive: false,
};