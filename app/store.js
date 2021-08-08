import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/usersSlice';
import blogReducer from '../features/blogs/blogsSlice';

export const store = configureStore({
  reducer: {
    userReducer: userReducer,
    blogReducer: blogReducer,
  }
});