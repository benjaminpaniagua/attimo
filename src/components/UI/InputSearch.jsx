import React from "react";
import { Search } from "lucide-react";
import PropTypes from "prop-types";
import "../../index.css";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

export function InputSearch({ placeholder, setSearch }) {
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="flex justify-between dark:bg-clr-dark-gray/30 rounded-md overflow-hidden text-clr-dark-bg z-0">
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label={placeholder}
          variant="outlined"
          onChange={handleInputChange}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <Search size="20" />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </div>
  );
}

InputSearch.propTypes = {
  placeholder: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

InputSearch.defaultProps = {
  placeholder: "Search...",
};