import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements'
import IconAnt from 'react-native-vector-icons/AntDesign';

const Blog = ({ blog, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.user}>
          <TouchableOpacity>
            <Avatar
              rounded
              title={blog.username.toString().substring(0, 1)}
              source={{
                uri:
                  `${blog.image && blog.image}https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg`,
              }}
            />
          </TouchableOpacity>
          <Text style={styles.username}>{blog.username}</Text>
        </View>
        <Text style={styles.date}>Published: {blog.createdAt.toString().substring(0, 10)} / {blog.createdAt.toString().substring(11, 16)}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Blog Detail', { blog: blog })} style={styles.more}>
          <IconAnt name="right" size={25} color="#21243D" />
        </TouchableOpacity>
      </View>
      <View style={styles.middleContainer}>
        <Text style={styles.title}>{blog.title}</Text>
        <Text numberOfLines={3} style={styles.body}>{blog.body}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity>
          <IconAnt name="like2" size={25} color={"#21243D"} />
        </TouchableOpacity>
      </View>
      <Image source={{ uri: blog.image }} width={50} height={50} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 220,
    width: "100%",
    backgroundColor: "#FFF",
    marginBottom: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  topContainer: {
    borderBottomColor: "rgba(0,0,0,0.3)",
    padding: 12,
    paddingBottom: 5,
    borderBottomWidth: 1,
    position: 'relative',
  },
  user: {
    flexDirection: 'row',
    alignItems: "center"
  },
  username: {
    color: "#21243D",
    fontSize: 18,
    marginLeft: 10
  },
  date: {
    color: "#21243D",
    fontSize: 14,
    marginTop: 3,
  },
  middleContainer: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderBottomColor: "rgba(0,0,0,0.3)",
    borderBottomWidth: 1,
    minHeight: 60,
    flexGrow: 1
  },
  title: {
    color: "#21243D",
    fontSize: 18,
  },
  body: {
    color: "#21243D",
    fontSize: 16,
  },
  bottomContainer: {
    padding: 12,
    paddingLeft: 18
  },
  more: {
    position: 'absolute',
    right: 8,
    top: "50%",
    marginTop: -12
  },
})

export default Blog
