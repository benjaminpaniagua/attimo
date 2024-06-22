import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import PropTypes from "prop-types";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 6 + ITEM_PADDING_TOP,
    },
  },
};

export default function MultipleSelectCheckmarks({
  items,
  selectedItems,
  handleChange,
  label,
}) {
  return (
    <FormControl sx={{ m: 1 }} className={`z-0 w-[12rem] md:w-full`}>
      <InputLabel
        id="multiple-checkbox-label"
        className="text-black dark:text-clr-light-gray"
      >
        {label}
      </InputLabel>
      <Select
        labelId="multiple-checkbox-label"
        id="multiple-checkbox"
        multiple
        value={selectedItems}
        onChange={handleChange}
        input={<OutlinedInput label={label} className="rounded-lg" />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
        className="bg-white dark:bg-clr-dark-gray/30 text-black dark:text-clr-light-gray rounded-lg"
      >
        {items.map((item) => (
          <MenuItem
            key={item.id}
            value={item.name}
            className="bg-white dark:bg-clr-dark-gray/30 text-black dark:text-clr-light-gray rounded-lg"
          >
            <Checkbox
              checked={selectedItems.indexOf(item.name) > -1}
              className="text-black dark:text-clr-light-gray"
            />
            <ListItemText primary={item.name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

MultipleSelectCheckmarks.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};