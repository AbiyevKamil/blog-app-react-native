import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
// import CookieManager from '@react-native-community/cookies'
// import AsyncStorage from '@react-native-community/async-storage';

const BASE_URL = Platform.OS === 'android' ? 'http://10.0.2.2' : 'http://localhost';

export const getUser = createAsyncThunk('userReducer/getUser', async (id) => {
  const res = await axios.get(`${BASE_URL}:3000/api/users/find_by_id/${id}`);
  return res.data;
})

export const userRegister = createAsyncThunk('userReducer/userRegister', async (data) => {
  const res = await axios.post(`${BASE_URL}:3000/api/auth/register`, {
    email: data.email,
    username: data.username,
    password: data.password,
    password2: data.password2,
  });
  return res.data;
})

export const userLogin = createAsyncThunk('userReducer/userLogin', async (data) => {
  const res = await axios.post(`${BASE_URL}:3000/api/auth/login`, {
    email: data.email,
    password: data.password,
  });
  return res.data;
})

const initialState = {
  userData: [],
  isLoggedIn: false,
  registerSucces: false,
  registerError: [],
  loginSucces: false,
  loginError: [],
  errors: [],
  userToken: []
}

const usersSlice = createSlice({
  name: "usersData",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.userToken = action.payload;
    }
  },
  extraReducers: {
    [userRegister.pending]: (state, action) => {
      state.registerSucces = false;
      state.registerError = [];
      state.userData = [];
      console.log('pending')
    },
    [userRegister.rejected]: (state, action) => {
      state.registerSucces = false;
    },
    [userRegister.fulfilled]: (state, action) => {
      if (action.payload.status_code === 200) {
        state.registerSucces = true;
      }
      else {
        state.registerSucces = false;
        state.registerError = action.payload.error;
      }
    },
    // User Login
    [userLogin.pending]: (state, action) => {
      console.log('pending')
      state.loginError = [];
      state.loginSucces = false;
      state.isLoggedIn = false;
    },
    [userLogin.fulfilled]: (state, action) => {
      if (action.payload.status_code === 200) {
        state.userData = action.payload.user;
        state.loginSucces = true;
        state.isLoggedIn = true;
        // Set Cookies
        setCookie(action.payload.user._id)
      } else {
        state.loginSucces = false;
        state.loginError = action.payload.error;
      }
    },
    [userLogin.rejected]: (state, action) => {
      console.log('rejected')
    },
    // Get User Data 
    [getUser.fulfilled]: (state, action) => {
      if (action.payload.status_code === 200) {
        state.userData = action.payload.user;
      } else {
        state.errors.push({ msg: "Error occured while getting user information." })
      }
    }
  }
});

export const {
  setToken
} = usersSlice.actions
export const selectedUserData = state => state.userReducer.userData;
export const selectedIsLoggedIn = state => state.userReducer.isLoggedIn;
export const selectedRegisterSucces = state => state.userReducer.registerSucces;
export const selectedRegisterError = state => state.userReducer.registerError;
export const selectedLoginSucces = state => state.userReducer.loginError;
export const selectedLoginError = state => state.userReducer.loginError;
export const selectedUserToken = state => state.userReducer.userToken;
export default usersSlice.reducer