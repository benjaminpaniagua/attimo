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
            <div>
                <section>
                    <h3 className="font-regular text-clr-dark-blue">What is your gender?</h3>
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
                </section>

                <section>
                    <h3 className="mt-8 font-regular text-clr-dark-blue">Do you practice sport regularly?</h3>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                    >
                    <FormControlLabel value="athlete" control={<Radio color="default"/>} label="Yes, I do" />
                    <FormControlLabel value="nathlete" control={<Radio color="default"/>} label="No, I don't" />

                    </RadioGroup>
                </section>
            </div>
        </FormControl>
    );
}

export default RadioAsk;
