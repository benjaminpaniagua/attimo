import React from "react";
import "../../index.css";
import PropTypes from 'prop-types';

export function SignInputs({type, name}) {
    return (
        <div className="input-wrap relative h-[37px] mb-8">
            <input type={type} name={name} minLength='4' className="input-field absolute w-full h-full text-[0.95rem] text-clr-dark-blue transition-[0.4s] p-0 border-b-clr-light-gray border-b border-solid bg-none outline-none " autoComplete="off" required/>
            <label className="absolute -translate-y-2/4 text-[0.95rem] text-clr-light-gray pointer-events-none transition-[0.4s] left-0 top-2/4">{name}</label>
        </div>
    )
}

SignInputs.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

SignInputs.defaultProps = {
    name: "Name",
    type: "text",
}
