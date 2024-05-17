import "../../index.css";
import React from "react";
import PropTypes from 'prop-types';
import useLogin from "../hooks/useLogin";
import { useHiddenInputs } from "../hooks/useHideInputs";

export function SignInputs({ type, name, defaultValue, isActive}) {
    useLogin();
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
    const { value, handleClick } = useHiddenInputs(defaultValue);

    
    
    return (
        <div className="input-wrap relative h-[37px] mb-8">
            <input 
                type={type}
                name={name}
                minLength='4'
                className={`input-field absolute duration-300 w-full h-full text-[0.95rem] text-clr-dark-blue transition-[0.4s] p-0 border-b-clr-light-gray border-b border-solid bg-none outline-none bg-transparent dark:text-clr-white ${isActive ? 'active' : ''}`}
                autoComplete="off"
                required
                defaultValue={value}
                onClick={handleClick}
            />
            <label className={`absolute -translate-y-2/4 text-[0.95rem] duration-300 text-clr-light-gray dark:text-clr-light-green pointer-events-none transition-[0.4s] left-0 top-2/4`}>{formattedName}</label>
        </div>
    );
}

SignInputs.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    isActive: PropTypes.bool,
};

SignInputs.defaultProps = {
    name: "Name",
    type: "text",
    value: "",
    isActive: false,
};

export default SignInputs;