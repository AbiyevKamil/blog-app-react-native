import React, { useEffect } from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-elements'
import { useSelector, useDispatch } from 'react-redux'
import { selectedUserData } from '../features/users/usersSlice'
import { selectedUserBlogs, getUserBlogs } from '../features/blogs/blogsSlice'

const Profile = () => {
  const userData = useSelector(selectedUserData);
  const userBlogs = useSelector(selectedUserBlogs);
  const dispatch = useDispatch()
  useEffect(() => {
    if (userData.length > 0) {
      dispatch(getUserBlogs(userData.username));
    }
  }, [])
  return (
    <View style={styles.container}>
      {userData.length ? (<>
        <View style={styles.userContainer}>
          <Avatar
            rounded
            size={50}
            title={userData.username.toString().substring(0, 1)}
            source={{
              uri:
                `https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg`,
            }}
          />
          <Text style={styles.username}>
            {userData.username.toString()}
          </Text>
        </View>
        <ScrollView style={styles.descContainer}>
          <Text style={styles.joined}>
            Joined:
          </Text>
          <Text style={styles.joinedSelf}>
            {userData.createdAt.toString().substring(0, 10)} / {userData.createdAt.toString().substring(11, 16)}
          </Text>
          <Text style={styles.email}>
            Email:
          </Text>
          <Text style={styles.emailSelf}>
            {userData.email}
          </Text>
          <Text style={styles.header}>Your blogs: </Text>
          <View style={styles.blogsContainer}>
            {userBlogs.length ? userBlogs.map(blog => (<Blog
              key={blog._id}
              blog={blog}
            />)) : (
              <Text style={styles.noPost}>No Post!</Text>
            )}
          </View>
        </ScrollView>
      </>) : <Text>Loading</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: "rgba(0,0,0,0.5)",
  },
  username: {
    fontSize: 20,
    marginLeft: 15,

  },
  descContainer: {
    flex: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    padding: 16,

  },
  joined: {
    fontSize: 18,
    marginBottom: 5,

  },
  joinedSelf: {
    fontSize: 16,
    marginBottom: 15,
  },
  email: {
    fontSize: 18,
    marginBottom: 5,
  },
  emailSelf: {
    fontSize: 16,
    marginBottom: 10,
  },
  noPost: {
    fontSize: 20,
  },
  blogsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 160,
  },
  header: {
    fontSize: 18,
  },
})

export default Profile
