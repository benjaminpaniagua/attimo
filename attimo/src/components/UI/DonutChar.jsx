import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function DonutChar({ data }) {
  return (
    <div className='mt-12'>
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 20, additionalRadius: -30, color: 'grey' },
        },
      ]}
      height={300}
    />
    </div>
  );
}