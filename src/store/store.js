import { configureStore } from '@reduxjs/toolkit'

import cartItems from './cartItems'

const store = configureStore({
  reducer: {
    cart: cartItems.reducer,
  },
})

export default store
