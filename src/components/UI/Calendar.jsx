import * as React from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import Badge from '@mui/material/Badge';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import './calendar.css';

const initialValue = dayjs();

function ServerDay(props) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

  const isSelected =
    !props.outsideCurrentMonth && highlightedDays.some(highlightedDay => day.isSame(highlightedDay, 'day'));

  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      badgeContent={isSelected ? ' ' : undefined}
      style={{ zIndex: 0 }}>
      <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
    </Badge>
  );
}

ServerDay.propTypes = {
  highlightedDays: PropTypes.array,
  day: PropTypes.object.isRequired,
  outsideCurrentMonth: PropTypes.bool.isRequired,
};

export default function DateCalendarServerRequest() {
  const [highlightedDays, setHighlightedDays] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchHighlightedDays = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:8000/api/activities/highlighted');
      const data = await response.json();
      setHighlightedDays(data.map(date => dayjs(date)));
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching highlighted days:', error);
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchHighlightedDays();
  }, []);

  const handleMonthChange = (date) => {
    //  actualizar las fechas destacadas al cambiar el mes
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      
        <DateCalendar
          defaultValue={initialValue}
          loading={isLoading}
          onMonthChange={handleMonthChange}
          renderLoading={() => <DayCalendarSkeleton />}
          slots={{
            day: ServerDay,
          }}
          slotProps={{
            day: {
              highlightedDays,
            },
          }}
        />
     
    </LocalizationProvider>
  );
}
