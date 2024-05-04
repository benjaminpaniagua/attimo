import React, { useEffect } from 'react';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export function RadioAsk() {

    const [value, setValue] = React.useState('female');   
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <FormControl>
            <h3 className=" font-medium text-gray-900 ">What is your gender?</h3>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            value={value}
                onChange={handleChange}
            >
                <FormControlLabel value="female" control={<Radio color="default"/>} label="Female" />
                <FormControlLabel value="male" control={<Radio color="default"/>} label="Male" />
                <FormControlLabel value="other" control={<Radio color="default"/>} label="Other" />

            </RadioGroup>

            <h3 className="mt-8 font-medium text-gray-900 ">Do you practice sport regularly?</h3>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={value}
                onChange={handleChange}
            >
                <FormControlLabel value="athlete" control={<Radio color="success"/>} label="Yes! I am an athlete" />
                <FormControlLabel value="nathlete" control={<Radio color="error"/>} label="Not particularly" />

            </RadioGroup>

        </FormControl>
    );
}

export default RadioAsk;
