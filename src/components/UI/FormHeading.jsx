import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import "../../index.css";

export function FormHeading({ title, subHeading, linkText, link }) {
    return (
        <section className="heading">
            <h1>{title}</h1>
            <p className="text-clr-dark-gray font-light text-[clamp(fs-xsmall,fs-small,fs-normal)]">
                {subHeading} 
                {linkText && (
                    <span className="toggle cursor-pointer hover:text-indigo-500/80 text-clr-dark-blue no-underline font-medium transition-[0.3s] text-[clamp(fs-xsmall,fs-small,fs-normal)]">
                        <Link to={link}>{linkText}</Link>
                    </span>
                )}
            </p>
        </section>
    );
}

FormHeading.propTypes = {
    title: PropTypes.string.isRequired,
    subHeading: PropTypes.string,
    link: PropTypes.string,
    linkText: PropTypes.string
};

FormHeading.defaultProps = {
    title: "Welcome Back!",
    subHeading: "",
    link: "/login",
    linkText: ""
};
