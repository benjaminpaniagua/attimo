import React from "react";
import "../../index.css";

export function SubmitButton({value, subHeading, linkText}) {
    return (
        <div>
            <input type="submit" value={value} className="sign-btn inline-block w-full p-4 bg-clr-dark-blue text-white cursor-pointer text-fs-small transition-[0.3s] mb-4 rounded-[0.5rem] border-[none] hover:bg-clr-blue"/>
            <p className="text-clr-dark-gray font-light text-[clamp(fs-xsmall,fs-small,fs-normal)">{subHeading} <span className="cursor-pointer hover:text-blue-900 text-clr-dark-blue no-underline font-medium transition-[0.3s] text-[clamp(fs-xsmall,fs-small,fs-normal)">{linkText}</span></p>
        </div>
    )
}
