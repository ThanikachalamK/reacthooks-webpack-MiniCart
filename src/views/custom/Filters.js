/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import Button from '@mui/material/Button'
import _ from 'lodash'

import searchSlice from '../../store/searchSlice'
import MultiSelect from '../common/MultiSelect'
import Dropdown from '../common/Dropdown'
import Switch from '../common/Switch'
import Datepicker from '../common/Datepicker'

const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr 1fr;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  .filter-controls {
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    grid-column-gap: 16px;
  }

  .filter-buttons {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-template-rows: 1fr;
    grid-column-gap: 16px;
  }
`

function Filters() {
  const { spaceXData, filters, flightNumbers, names } = useSelector(
    (state) => state.search
  )
  const [state, setState] = React.useState({ isFilterEmpty: true })
  const dispatch = useDispatch()
  const { setName, setFlightNumber, setUpcoming, setDate } = searchSlice.actions

  function onResultClick() {
    const { name, flightNumber, isUpcoming, launchDate } = filters
    let filteredData = []

    filteredData = spaceXData.filter(
      (item) =>
        ((name && name.includes(item.name)) || !name.length) &&
        ((flightNumber && item.flight_number === flightNumber) ||
          !flightNumber) &&
        ((isUpcoming && item.upcoming === isUpcoming) || !isUpcoming) &&
        ((launchDate &&
          item.date_utc ===
          new Date(launchDate.toLocaleDateString()).toISOString()) ||
          !launchDate)
    )
    dispatch(searchSlice.actions.setFilteredData(filteredData))
  }

  React.useEffect(() => {
    const { name, flightNumber, isUpcoming, launchDate } = filters
    if (_.isEmpty(name) && !flightNumber && !isUpcoming && !launchDate) {
      setState((currentState) => ({ ...currentState, isFilterEmpty: true }))
    } else {
      setState((currentState) => ({ ...currentState, isFilterEmpty: false }))
    }
  }, [
    filters.name,
    filters.flightNumber,
    filters.isUpcoming,
    filters.launchDate,
  ])

  return (
    <Container>
      <div className="filter-controls">
        <MultiSelect
          id="filter-name"
          label="Name"
          dataSource={names}
          textField="name"
          valueField="name"
          value={filters.name}
          onChange={({ target }) => dispatch(setName(target.value))}
        />
        <Dropdown
          id="filter-flight-number"
          label="Flight Number"
          dataSource={flightNumbers}
          textField="flightNumbers"
          valueField="flightNumbers"
          value={filters.flightNumber}
          onChange={({ target }) => dispatch(setFlightNumber(target.value))}
        />
        <Switch
          id="filter-isUpcoming"
          label="Upcoming"
          checked={filters.isUpcoming}
          onChange={({ target }) => dispatch(setUpcoming(target.checked))}
        />
        <Datepicker
          label="Launch Date"
          value={filters.launchDate}
          onChange={(newValue) =>
            dispatch(setDate(newValue.toLocaleDateString()))
          }
        />
      </div>
      <div className="filter-buttons">
        <Button
          variant="contained"
          onClick={onResultClick}
          disabled={state.isFilterEmpty}
        >
          View result
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            dispatch(searchSlice.actions.clearFilter())
          }}
        >
          Reset
        </Button>
      </div>
    </Container>
  )
}

export default Filters