import React from 'react'
import { Autocomplete as MUIAutocomplete } from '@mui/material'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'

const StyledMUIAutocomplete = styled(MUIAutocomplete)`
  color: #fff;
  background-color: #fff;
  padding: 5px;

  :hover {
    color: #fff;
  }

  & .MuiInputLabel-root.Mui-focused {
    color: #000;
  }

  &.Mui-focused {
    color: #000;
  }
`

function Autocomplete({ id, dataSource, textField, value, label, onChange }) {
  return (
    <StyledMUIAutocomplete
      sx={{ width: 300 }}
      multiple
      limitTags={2}
      id={id}
      options={dataSource.map((item) => item[textField])}
      getOptionLabel={(option) => option}
      renderInput={(params) => (
        <TextField {...params} label={label} placeholder={label} />
      )}
      value={value}
      onChange={onChange}
    />
  )
}

Autocomplete.defaultProps = {
  onChange: () => null,
}

Autocomplete.propTypes = {
  id: PropTypes.string.isRequired,
  dataSource: PropTypes.arrayOf(PropTypes.object).isRequired,
  textField: PropTypes.string.isRequired,
  valueField: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
}

export default Autocomplete