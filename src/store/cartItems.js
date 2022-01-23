import { createSlice } from '@reduxjs/toolkit'

const cart = createSlice({
  name: 'cart',
  initialState: {
    cartInfo: [],
    qtyInfo: {},
    isLoading: false,
  },
  reducers: {
    setQuantity: (state, action) => {
      state.isLoading = false
      state.qtyInfo = action.payload
    },
    onPending: (state) => {
      state.isLoading = true
    },
    onSuccess: (state, action) => {
      state.isLoading = false
      state.cartInfo = action.payload
      const obj = {}
      for (let i = 0; i < action.payload.length; i++) {
        obj[action.payload[i].id] = action.payload.filter(
          (item) => item.id === action.payload[i].id
        ).length
      }
      state.qtyInfo = obj
    },
    clearFilter: (state, action) => {
      state.isLoading = false
      state.cartInfo = action.payload
      state.qtyInfo = action.payload.map((item) => ({
        [item.id]: state.qtyInfo[item.id],
      }))
    },
  },
  extraReducers: (builder) => {},
})

export default cart
