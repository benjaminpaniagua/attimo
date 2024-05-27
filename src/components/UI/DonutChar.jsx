import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import PropTypes from 'prop-types';
import { EmptyState } from './EmptyState';
import { Database } from "lucide-react";

export default function DonutChar({ data, responsive }) {
  const bottomValue = responsive ? 105 : 50;

  return (
    <>
      {data.length === 0 ? (
        <EmptyState 
          icon={Database} 
          title="No data to display" 
          message="Enjoy your free time... for now" 
        />
      ) : (
        <div className='mt-8'>
          <PieChart
            margin={{ top: 0, bottom: bottomValue, left: 0, right: 0 }}
            series={[
              {
                data,
                highlightScope: { faded: 'global', highlighted: 'item' },
                faded: { innerRadius: 20, additionalRadius: -10, color: 'grey' },
              },
            ]}
            height={280}
            slotProps={{
              legend: { direction: 'row', position: { vertical: 'bottom', horizontal: 'middle' }, padding: 1, itemGap: 19 },
            }}
          />
        </div>
      )}
    </>
  );
}

DonutChar.propTypes = {
  data: PropTypes.array.isRequired,
  responsive: PropTypes.bool.isRequired
};

DonutChar.defaultProps = {
  data: [],
  responsive: false
};
