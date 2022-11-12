import { configureStore} from '@reduxjs/toolkit'
import { apiSlice } from './slice/ApiSlice'
import auth from './slice/AuthSlice'
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: auth
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
  
})