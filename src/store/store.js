import { configureStore } from '@reduxjs/toolkit'

// import reducer from './reducer';
// import counterSlice from './counterSlice'
import userSlice from './userSlice'
import searchSlice from './searchSlice'

const store = configureStore({
  reducer: {
    // counter: counterSlice.reducer,
    user: userSlice.reducer,
    search: searchSlice.reducer,
  },
})

export default store
