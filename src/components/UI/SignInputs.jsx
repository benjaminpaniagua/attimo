import React, { useState } from "react";
import PropTypes from 'prop-types';

export function SignInputs({ type, name, defaultValue, isActive, isFullname, placeholder }) {
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
    const [isValid, setIsValid] = useState(true); // Control validations

    // Function to validate the input
    const handleInputChange = (event) => {
        const { value } = event.target;

        // Validate if isFullname is true
        if (isFullname) {
            // Ask for at least 3 letters per word (3 words in total)
            const regex = /^(\w{3,}\s){2}\w{3,}$/;
            setIsValid(regex.test(value));
        }
    };

    return (
        <div className="input-wrap relative h-[37px] mb-8">
            <input 
                type={type}
                name={name}
                className={`input-field absolute duration-300 w-full h-full text-[0.95rem] text-clr-dark-blue transition-[0.4s] p-0 border-b-clr-light-gray border-b border-solid bg-none outline-none bg-transparent dark:text-clr-white/80 ${isActive ? 'active' : ''}`}
                autoComplete="off"
                required
                placeholder={placeholder}
                defaultValue={defaultValue}
                onChange={handleInputChange}
                pattern={isFullname ? "(\\w{3,}\\s){2}\\w{3,}" : undefined} // Apply pattern attribute if isFullname is true
            />
            <label className="absolute -translate-y-2/4 text-[0.95rem] duration-300 text-clr-light-gray dark:text-clr-white pointer-events-none transition-[0.4s] left-0 top-2/4">{formattedName}</label>
            {!isValid && (
                <p className="text-red-500 text-[0.75rem] absolute left-0 top-[37px]">Each word may have at least 3 letters.</p>
            )}
        </div>
    );
}

SignInputs.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    isActive: PropTypes.bool,
    isFullname: PropTypes.bool,
    placeholder: PropTypes.string,
};

SignInputs.defaultProps = {
    name: "Name",
    type: "text",
    value: "",
    isActive: false,
    isFullname: false,
    placeholder: "",
};

export default SignInputs;
