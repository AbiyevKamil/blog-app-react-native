import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs, selectedBlogs } from '../features/blogs/blogsSlice';
import Blog from './Blog';

const Blogs = ({ navigation }) => {
  const dispatch = useDispatch();
  const blogs = useSelector(selectedBlogs);
  useEffect(() => {
    dispatch(getBlogs());
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView style={{ padding: 20, marginBottom: 5 }}>
        {blogs.length > 0 && blogs.map(blog => (
          <Blog
            key={blog._id}
            blog={blog}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default Blogs
