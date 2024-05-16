import { useState } from "react";

export function useHiddenInputs(defaultValue) {
    const [value, setValue] = useState('');

    const handleClick = () => {
        if (!value) {
            setValue(defaultValue);
        }
    };


    return {
        value,
        handleClick
    };
}