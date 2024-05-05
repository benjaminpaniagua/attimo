import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 25,
    label: '-4 hrs',
  },
  {
    value: 50,
    label: '4-6 hrs',
  },
  {
    value: 75,
    label: '7-8 hrs',
  },
  {
    value: 100,
    label: '+9 hrs',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function Slider2() {
  return (
    <Box className="flex justify-between px-4" sx={{ width: 270 }}>
      <Slider
        aria-label="Restricted values"
        defaultValue={0}
        getAriaValueText={valuetext}
        step={null}
        marks={marks}
        color="gray"
      />
    </Box>
  );
}
