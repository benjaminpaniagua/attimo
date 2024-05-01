import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function SleepHoursChart({ data, colors }) {
  return (
    <BarChart
      series={[{ data: data.map(item => item.value) }]}
      height={290}
      xAxis={[{ data: data.map(item => item.label), scaleType: 'band' }]}
      margin={{ top: 40, bottom: 25, left: 40, right: 20 }}
      colors={colors} // Pasar los colores como propiedades
    />
  );
}
