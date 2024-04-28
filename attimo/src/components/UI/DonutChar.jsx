import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function DonutChar({ data }) {
  return (
    <div className='mt-12'>
    <PieChart
    margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 20, additionalRadius: -30, color: 'grey' },
        },
      ]}
      height={300} // Adjust height of the chart
        legend={{
          direction: 'row',
          position: { vertical: 'bottom', horizontal: 'middle' },
          padding: 1,
        }}
      />
    </div>
  );
}