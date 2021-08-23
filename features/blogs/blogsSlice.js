import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { Platform } from 'react-native';

const BASE_URL = Platform.OS === 'android' ? 'http://10.0.2.2' : 'http://localhost';

export const getBlogs = createAsyncThunk('blogReducer/getBlogs', async () => {
  const res = await axios.get(`${BASE_URL}:3000/api/blogs/all`);
  return res.data;
})

export const getUserBlogs = createAsyncThunk('blogReducer/getUserBlogs', async (username) => {
  const res = await axios.get(`${BASE_URL}:3000/api/blogs/get_by_username/${username}`);
  return res.data;
})

const initialState = {
  blogs: [],
  userBlogs: [],

}

const blogsSlice = createSlice({
  name: "blogsData",
  initialState,
  reducers: {

  },
  extraReducers: {
    [getBlogs.fulfilled]: (state, action) => {
      state.blogs = action.payload;
      console.log('Get Blogs Fullfilled')
    },
    [getBlogs.rejected]: (state, action) => {
      console.log('Get Blogs Rejected')
    },
    [getUserBlogs.fulfilled]: (state, action) => {
      state.userBlogs = action.payload;
    },
  }
});

export const {

} = blogsSlice.actions
export const selectedBlogs = state => state.blogReducer.blogs;
export const selectedUserBlogs = state => state.blogReducer.userBlogs;
export default blogsSlice.reducer