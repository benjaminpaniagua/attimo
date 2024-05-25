import React from 'react';

export function SelectAsk() {

    const [value, setValue] = React.useState('noSchol');   
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <select value={value} onChange={handleChange} className="mt-3 text-base">
            <option value="noScholarship">No Scholarship</option>
                    <option value="partialScholarship">Partial Scholarship</option>
                    <option value="fullScholarship">Full Scholarship</option>
            </select>
        </div>
    );
}

export default SelectAsk;