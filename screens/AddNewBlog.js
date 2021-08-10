import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, Button, Image, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native'
import { Formik } from 'formik';
import * as Yup from 'yup';

const signUpSchema = Yup.object({
  title: Yup.string().min(6, "Title is short!").required("Title is required!"),
  body: Yup.string().min(20, "Content is short!").required("Content is required!"),
})

const AddNewBlog = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const initialValues = {
    title: title,
    body: body,
  }

  const handeSubmit = (values) => {
    console.log(values);
  }
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} style={styles.container}>
      <Image style={{ width: 120, height: 120, marginTop: 20, alignSelf: 'center' }} source={require('../assets/homeLogo.png')} />
      <Formik
        initialValues={initialValues}
        onSubmit={values => handeSubmit(values)}
        validationSchema={signUpSchema}
      >
        {props => (
          <View style={styles.formContainer}>
            <Text style={props.errors.title ? styles.labelError : styles.label}>Title: </Text>
            <TextInput
              style={props.errors.title ? styles.inputError : styles.input}
              placeholder='Title'
              onChangeText={props.handleChange('title')}
              onBlur={props.handleBlur('title')}
              value={props.values.title}
            />
            <Text style={styles.errorText}>{props.touched.title && props.errors.title}</Text>
            <Text style={props.errors.body ? styles.labelError : styles.label}>Content: </Text>
            <TextInput
              style={props.errors.body ? styles.inputError : styles.input}
              placeholder='body'
              onChangeText={props.handleChange('body')}
              onBlur={props.handleBlur('body')}
              value={props.values.body}
              multiline={true}
            />
            <Text style={styles.errorText}>{props.touched.body && props.errors.body}</Text>
            <TouchableOpacity style={styles.button} onPress={() => {
              props.handleSubmit()
            }}>
              <Text style={styles.buttonText}>Add Blog</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
    marginTop: 25,
    padding: 15,
  },
  input: {
    borderColor: "#13C767",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 6,
    fontSize: 16,
    borderRadius: 6,
    color: "#13C767",
  },
  inputError: {
    borderColor: "#FF6464",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 6,
    fontSize: 16,
    borderRadius: 6,
    color: "#FF6464",
  },
  button: {
    marginTop: 15,
    width: 180,
    backgroundColor: "#FF6464",
    padding: 15,
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius: 8
  },
  buttonText: {
    textAlign: 'center',
    color: "#fff",
    fontSize: 16
  },
  errorText: {
    color: "#FF6464",
    fontSize: 14,
    paddingVertical: 5,
  },
  label: {
    color: "#13C767",
    fontSize: 16,
    paddingVertical: 5,
  },
  labelError: {
    color: "#FF6464",
    fontSize: 16,
    paddingVertical: 5,
  },

})

export default AddNewBlog
