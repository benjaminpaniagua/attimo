import PropTypes from "prop-types";
import "../../index.css";

export function FormHeading({title, subHeading, linkText}) {
    return (
        <section className="heading">
            <h1>{title}</h1>
            <p className="text-clr-dark-gray font-light text-[clamp(fs-xsmall,fs-small,fs-normal)]">{subHeading} <span className="toggle cursor-pointer hover:text-blue-900 text-clr-dark-blue no-underline font-medium transition-[0.3s] text-[clamp(fs-xsmall,fs-small,fs-normal)]">{linkText}</span></p>
        </section>
    )
}

FormHeading.propTypes = {
    title: PropTypes.string.isRequired,
    subHeading: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired
}

FormHeading.defaultProps = {
    title: "Welcome Back!",
    subHeading: "Don't have an account?",
    linkText: "Sign Up"
}