import { createAction, createAsyncThunk } from '@reduxjs/toolkit'

import getAPIData from '../helpers/httpService'

// const incrementAsync = createAction('incrementAsync')
const getSpaceXDataAsync = createAction('getSpaceXDataAsync')

/*
const fakeAPI = (counterValue) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: counterValue })
    }, 2000)
  })
}

export const incrementAsyncThunk = createAsyncThunk(
  incrementAsync,
  async (counterValue) => {
    const response = await fakeAPI(counterValue)

    return response.data
  }
)
*/

export const getSpaceXData = createAsyncThunk(getSpaceXDataAsync, async () => {
  const response = await getAPIData('get', '/launches')

  return response.data
})
