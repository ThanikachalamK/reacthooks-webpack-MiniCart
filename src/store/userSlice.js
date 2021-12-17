import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: { name: '' },
  reducers: {
    setUsername: (state, action) => {
      state.name = action.payload
    },
  },
})

export default userSlice
