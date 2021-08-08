import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userData: [],
  isLoggedIn: true
}

const usersSlice = createSlice({
  name: "usersData",
  initialState,
  reducers: {
  
  }
});

export const {

} = usersSlice.actions
export const selectedUserData = state => state.userReducer.userData;
export const selectedIsLoggedIn = state => state.userReducer.isLoggedIn;
export default usersSlice.reducer