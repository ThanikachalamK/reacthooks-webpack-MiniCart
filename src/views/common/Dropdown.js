import React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import PropTypes from 'prop-types'

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
    },
  },
}

function Dropdown({
  id,
  dataSource = [],
  value,
  label,
  textField,
  valueField,
  onChange,
}) {
  return (
    <FormControl sx={{ m: 1, minWidth: 80, margin: 0 }} margin="none">
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id={id}
        value={value}
        label={label}
        onChange={onChange}
        MenuProps={MenuProps}
        margin="none"
      >
        {dataSource.map((item) => (
          <MenuItem key={item[valueField]} value={item[valueField]}>
            {item[textField]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

Dropdown.defaultProps = {
  onChange: () => null,
}

Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  dataSource: PropTypes.arrayOf(PropTypes.object).isRequired,
  textField: PropTypes.string.isRequired,
  valueField: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
}

export default Dropdown