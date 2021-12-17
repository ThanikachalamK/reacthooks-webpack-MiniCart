import { createSlice } from '@reduxjs/toolkit'

import { getSpaceXData } from './thunks'

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    spaceXData: [],
    filters: {
      name: [],
      flightNumber: '',
      isUpcoming: false,
      launchDate: null,
      filteredData: [],
    },
    names: [],
    flightNumbers: [],
    showFilters: false,
    isLoading: false,
  },
  reducers: {
    setName: (state, action) => {
      state.filters.name = action.payload
    },
    setFlightNumber: (state, action) => {
      state.filters.flightNumber = action.payload
    },
    setUpcoming: (state, action) => {
      state.filters.isUpcoming = action.payload
    },
    setDate: (state, action) => {
      state.filters.launchDate = action.payload
    },
    toggleFilters: (state, action) => {
      state.showFilters = !state.showFilters
    },
    onPending: (state) => {
      state.isLoading = true
    },
    setFilteredData: (state, action) => {
      state.filters.filteredData = action.payload
    },
    onSuccess: (state, action) => {
      state.isLoading = false
      state.spaceXData = action.payload
      state.filters.filteredData = action.payload
      state.names = action.payload.map((item) => ({
        id: item.id,
        name: item.name,
      }))
      state.flightNumbers = action.payload.map((item) => ({
        id: item.id,
        flightNumbers: item.flight_number,
      }))
    },
    clearFilter: (state) => {
      state.filters = {
        name: [],
        flightNumber: '',
        isUpcoming: false,
        launchDate: null,
        filteredData: state.spaceXData,
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSpaceXData.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getSpaceXData.fulfilled, (state, action) => {
      state.isLoading = false
      state.spaceXData = action.payload
    })
  },
})

export default searchSlice
