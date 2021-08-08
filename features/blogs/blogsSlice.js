import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { Platform } from 'react-native';

const BASE_URL = Platform.OS === 'android' ? 'http://10.0.2.2' : 'http://localhost';

export const getBlogs = createAsyncThunk('blogReducer/getBlogs', async () => {
  const res = await axios.get(`${BASE_URL}:3000/api/blogs/all`);
  return res.data;
})

const initialState = {
  blogs: [],
}

const blogsSlice = createSlice({
  name: "blogsData",
  initialState,
  reducers: {

  },
  extraReducers: {
    [getBlogs.fulfilled]: (state, action) => {
      state.blogs = action.payload;
    }
  }
});

export const {

} = blogsSlice.actions
export const selectedBlogs = state => state.blogReducer.blogs;
export default blogsSlice.reducer