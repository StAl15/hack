import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {  
    id: null,
    user: null,
    token: null,
    role: null,
    surname: null,
    name: null,
    middleName: null,
  }
  
  export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setCredentials: (state, action) => {
       const {login, jwtToken, role, userId} = action.payload
       const data = axios.get(`https://hack.invest-open.ru/user/info?userId=${userId}`)
       console.log(data)
       state.user = login
       state.token = jwtToken
       state.role = role
       state.id = userId
      },
      logOut: (state) => {
        state.user = null
        state.token = null
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setCredentials, logOut, } = authSlice.actions
  
  export default authSlice.reducer

  export const selectCurrentUser = (state) => state.auth.user
  export const selectCurrentToken = (state) => state.auth.token