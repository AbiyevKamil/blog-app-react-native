import { Avatar } from 'react-native-elements'
import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import IconAnt from 'react-native-vector-icons/AntDesign';

const BlogDetail = ({ route, navigation }) => {
  const { blog } = route.params
  return (
    <View style={styles.container}>
      {blog.image && <View style={styles.imageContainer}>
        <Image source={{ uri: blog.image }} style={{ width: "100%", height: "100%" }} />
      </View>
      }
      <ScrollView style={blog.image ? styles.infoContainer : styles.infoImagelessContainer}>
        <View style={styles.topContainer}>
          <View style={styles.userContainer}>
            <Avatar
              rounded
              title={blog.username.toString().substring(0, 1)}
              source={{
                uri:
                  `${blog.image && blog.image}https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg`,
              }}
            />
            <Text style={blog.image ? styles.user : styles.imagelessUser}>{blog.username}</Text>
          </View>
          <Text style={blog.image ? styles.date : styles.imagelessDate}>Published: {blog.createdAt.toString().substring(0, 10)} / {blog.createdAt.toString().substring(11, 16)}</Text>
        </View>
        <View style={styles.middleContainer}>
          <Text style={blog.image ? styles.title : styles.imagelessTitle}>{blog.title}</Text>
          <Text style={blog.image ? styles.body : styles.imagelessBody}>{blog.body}</Text>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <IconAnt name="like2" size={27} style={blog.image ? styles.icon : styles.imagelessIcon} />
          </TouchableOpacity>
        </View>
        <Text style={blog.image ? styles.likes : styles.imagelessLikes}>
          {blog.likes || 0} likes
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0.7
  },
  infoContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  infoImagelessContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  userContainer: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    padding: 10
  },
  user: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10
  },
  imagelessUser: {
    color: "#21243D",
    fontSize: 18,
    marginLeft: 10
  },
  topContainer: {
    borderBottomColor: "rgba(0,0,0,0.9)",
    borderBottomWidth: 1,
    paddingVertical: 10
  },
  middleContainer: {
    flexGrow: 1,
    padding: 15
  },
  title: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 15,
  },
  imagelessTitle: {
    color: "#21243D",
    fontSize: 16,
    marginBottom: 15,
  },
  body: {
    color: "#fff",
    fontSize: 16,
  },
  imagelessBody: {
    color: "#21243D",
    fontSize: 16,
  },
  date: {
    color: "#fff",
    fontSize: 12,
    paddingHorizontal: 10
  },
  imagelessDate: {
    color: "#21243D",
    fontSize: 12,
    paddingHorizontal: 10
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  likes: {
    color: '#fff',
    fontSize: 16,
    flex: 0.5,
    textAlign: 'center'
  },
  imagelessLikes: {
    color: '#21243D',
    fontSize: 16,
    flex: 0.5,
    textAlign: 'center'
  },
  icon: {
    color: '#fff',
  },
  imagelessIcon: {
    color: '#21243D',
  },
  iconContainer: {
    alignItems: 'center',
    flex: 0.5
  },
})

export default BlogDetail
