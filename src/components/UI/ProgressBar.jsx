import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

export default function LinearWithValueLabel({ value }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" value={value}
          sx={{ width: 'full' , '& .MuiLinearProgress-bar': {},}}
        />
      </Box>
    </Box>
  );
}
