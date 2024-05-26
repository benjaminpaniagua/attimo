import { BarChart } from '@mui/x-charts/BarChart';
import PropTypes from 'prop-types';
import tailwindColors from "../../../tailwind.config.js";

export default function SleepHoursChart({ data, color }) {
  return (
    <BarChart
      series={[{ data: data.map(item => item.value) }]}
      height={290}
      xAxis={[{ data: data.map(item => item.label), scaleType: 'band' }]}
      margin={{ top: 40, bottom: 25, left: 40, right: 20 }}
      colors={[color]}
    />
  );
}

SleepHoursChart.propTypes = {
  data: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired, 
};

SleepHoursChart.defaultProps = {
  color: tailwindColors.theme.extend.colors["clr-blue"],
};
