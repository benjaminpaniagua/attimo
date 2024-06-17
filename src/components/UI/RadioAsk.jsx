import React, { useState } from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';

function RadioAsk() {
    const [gender, setGender] = useState('');
    const [sport, setSport] = useState('');

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleSportChange = (event) => {
        setSport(event.target.value);
    };

    return (
        <FormControl>
            <div>
                <section>
                    <h3 className="font-regular text-clr-dark-blue">What is your gender?</h3>
                    <RadioGroup
                        row
                        aria-labelledby="gender-radio-buttons-group-label"
                        name="gender-radio-buttons-group" // Unique name
                        value={gender}
                        onChange={handleGenderChange}
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
                        aria-labelledby="sport-radio-buttons-group-label"
                        name="sport-radio-buttons-group" // Unique name
                        value={sport}
                        onChange={handleSportChange}
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