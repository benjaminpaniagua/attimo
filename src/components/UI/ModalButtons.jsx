import "../../index.css";
import PropTypes from "prop-types";
export function ModalButtons({ onClick, text }) {
    return (
        <button onClick={onClick} className="w-full text-center dark:text-clr-dark-blue dark:bg-clr-light-gray dark:hover:bg-clr-white font-medium text-fs-med text-clr-dark-blue bg-clr-light-secondary-bg hover:bg-indigo-300/70 rounded-lg my-5 p-5 items-center">{text}</button> 
    );
}

ModalButtons.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}

ModalButtons.defaultProps = {
    text: "View More"
}