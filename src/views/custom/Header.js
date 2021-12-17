import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import IconButton from '@mui/material/IconButton'
import { FilterAlt } from '@mui/icons-material'
import { useHistory } from 'react-router'

import searchSlice from '../../store/searchSlice'
import Autocomplete from '../common/Autocomplete'

const Container = styled.header`
  background-color: #000;
  color: #fff;
  min-height: 10%;
  display: flex;
  flex-flow: row nowrap;
  flex-basis: 10%;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  h1 {
    flex: 1 0;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
`

function Header() {
  const { spaceXData, names } = useSelector((state) => state.search)
  const dispatch = useDispatch()
  const history = useHistory()

  function onSearchHandler(event, value) {
	  if (value.length === 0) {
		 return dispatch(searchSlice.actions.setFilteredData(spaceXData))
	  }
	  
    let filteredData = []
    filteredData = spaceXData.filter(
      (item) => value && value.includes(item.name)
    )
	
    history.push('/');
    dispatch(searchSlice.actions.clearFilter())
    dispatch(searchSlice.actions.setFilteredData(filteredData))
  }

  return (
    <Container>
      <h1>Space Travel</h1>
      <Autocomplete
        id="search-by-name"
        data-testid="search-by-name"
        label="Search by name"
        placeholder="Search by name"
        dataSource={names}
        textField="name"
        valueField="name"
        onChange={onSearchHandler}
      />
      <div className="search-icons">
        <IconButton
          onClick={() => {
            history.push('/')
            dispatch(searchSlice.actions.toggleFilters())          
            }
          }
          size="large"
          color="inherit"
        >
          <FilterAlt fontSize="large" />
        </IconButton>
      </div>
    </Container>
  )
}

export default Header