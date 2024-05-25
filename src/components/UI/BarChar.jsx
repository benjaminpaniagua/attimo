import { BarChart } from '@mui/x-charts/BarChart';
import propTypes from 'prop-types';
import tailwindColors from "../../../tailwind.config.js";

export default function SleepHoursChart({ data, colors }) {
  return (
    <BarChart
      series={[{ data: data.map(item => item.value) }]}
      height={290}
      xAxis={[{ data: data.map(item => item.label), scaleType: 'band' }]}
      margin={{ top: 40, bottom: 25, left: 40, right: 20 }}
      colors={colors} 
    />
  );
}

SleepHoursChart.propTypes = {
  data: propTypes.array.isRequired,
  colors: propTypes.array.isRequired,
};

SleepHoursChart.defaultProps = {
  data: [],
  colors: [tailwindColors.theme.extend.colors["clr-blue"]],
};
