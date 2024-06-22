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
  const { highlightedDays = [], day, ...other } = props;

  const isSelected = highlightedDays.some(highlightedDay => day.isSame(highlightedDay, 'day'));

  return (
    <Badge
      key={day.toString()}
      overlap="circular"
      badgeContent={isSelected ? '' : undefined}
      style={{ zIndex: 0 }}
    >
      <PickersDay {...other} day={day} />
    </Badge>
  );
}

ServerDay.propTypes = {
  highlightedDays: PropTypes.array,
  day: PropTypes.object.isRequired,
};

export default function DateCalendarServerRequest() {
  const [highlightedDays, setHighlightedDays] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchHighlightedDays = async (month) => {
    try {
      setIsLoading(true);
      
      // Obtener el primer y último día del mes actual
      const startOfMonth = dayjs(month).startOf('month').format('YYYY-MM-DD');
      const endOfMonth = dayjs(month).endOf('month').format('YYYY-MM-DD');
      
      // Realizar la llamada al backend para obtener las fechas destacadas del mes actual
      const response = await fetch(`http://attimobackend.test/api/activities/highlighted?start=${startOfMonth}&end=${endOfMonth}`);
      const data = await response.json();
      
      // Convertir las fechas a objetos dayjs
      const formattedDates = data.map(date => dayjs(date));
      setHighlightedDays(formattedDates);
      
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching highlighted days:', error);
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchHighlightedDays(initialValue);
  }, []);

  const handleMonthChange = (date) => {
    // Actualizar las fechas destacadas al cambiar de mes
    fetchHighlightedDays(date);
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
