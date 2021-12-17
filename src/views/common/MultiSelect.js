import React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import ListItemText from '@mui/material/ListItemText'
import Select from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'
import PropTypes from 'prop-types'

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
    },
  },
}

function MultiSelect({
  id,
  dataSource = [],
  value = [],
  label,
  textField,
  valueField,
  onChange,
}) {
  return (
    <FormControl sx={{ m: 1, width: 300, margin: 0 }} margin="none">
      <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id={id}
        multiple
        value={value}
        onChange={onChange}
        input={<OutlinedInput label="Tag" />}
        renderValue={(selected) => selected.join(', ')}
        MenuProps={MenuProps}
        autoWidth={false}
        margin="none"
      >
        {dataSource.map((item) => (
          <MenuItem key={item[valueField]} value={item[valueField]}>
            <Checkbox checked={value.includes(item[valueField])} />
            <ListItemText primary={item[textField]} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

MultiSelect.defaultProps = {
  onChange: () => null,
}

MultiSelect.propTypes = {
  id: PropTypes.string.isRequired,
  dataSource: PropTypes.arrayOf(PropTypes.object).isRequired,
  textField: PropTypes.string.isRequired,
  valueField: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
}

export default MultiSelect