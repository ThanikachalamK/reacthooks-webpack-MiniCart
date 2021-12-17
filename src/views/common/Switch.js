import React from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import { Switch as MUISwitch } from '@mui/material'
import PropTypes from 'prop-types'

function Switch({ id, label, labelPlacement, checked = false, onChange }) {
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="start"
          control={
            <MUISwitch
              id={id}
              checked={checked}
              color="primary"
              onChange={onChange}
            />
          }
          label={label}
          labelPlacement={labelPlacement}
        />
      </FormGroup>
    </FormControl>
  )
}

Switch.defaultProps = {
  onChange: () => null,
  labelPlacement: 'start',
  checked: false,
}

Switch.propTypes = {
  id: PropTypes.string.isRequired,
  labelPlacement: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
}

export default Switch
