import "../../index.css";
import PropTypes from "prop-types";
export function ModalButtons({ onClick, text }) {
    return (
        <button onClick={onClick} className="w-full text-center dark:text-clr-white/80 dark:bg-black/30 dark:hover:bg-clr-dark-gray/20 font-medium text-fs-med text-clr-dark-blue bg-clr-light-secondary-bg hover:bg-clr-light-secondary-bg/75 rounded-lg p-5 items-center">{text}</button> 
    );
}

ModalButtons.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}

ModalButtons.defaultProps = {
    text: "View More"
}