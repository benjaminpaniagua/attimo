import PropTypes from 'prop-types';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const SingleSelectDropdown = ({ options, value, onChange, label, placeholder, valueLabel }) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel shrink={value !== "0" || undefined} style={{ transition: 'opacity 0.3s', opacity: value === "0" ? 0 : 1 }}>
        {label}
      </InputLabel>
      <Select
        value={value}
        onChange={onChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Select' }}
      >
        <MenuItem value="0">{placeholder}</MenuItem>
        {options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
      {value !== "0" && <span>{valueLabel}</span>}
    </FormControl>
  );
};

SingleSelectDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  valueLabel: PropTypes.string,
};

export default SingleSelectDropdown;
