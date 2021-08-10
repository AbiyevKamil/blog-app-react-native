import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, Button, Image, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectedUserData, userLogin, selectedIsLoggedIn, selectedLoginError, selectedLoginSucces } from '../features/users/usersSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const logInSchema = Yup.object({
  email: Yup.string().email("Email is not valid!").required("Email is required!"),
  password: Yup.string().min(6, "Password must be at lest 6 characters!").required("Password is required!"),
})

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()
  const userData = useSelector(selectedUserData)
  const isLoggedIn = useSelector(selectedIsLoggedIn)
  const loginError = useSelector(selectedLoginError)
  const loginSucces = useSelector(selectedLoginSucces)

  const initialValues = {
    email: email,
    password: password,
  }

  const handeSubmit = (values) => {
    dispatch(userLogin(values))
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} style={styles.container}>
      <Image style={{ width: 120, height: 120, marginTop: 20, alignSelf: 'center' }} source={require('../assets/homeLogo.png')} />
      <Formik
        initialValues={initialValues}
        onSubmit={values => handeSubmit(values)}
        validationSchema={logInSchema}
      >
        {props => (
          <View style={styles.formContainer}>
            <TextInput
              style={props.errors.email ? styles.inputError : styles.input}
              placeholder='Email'
              onChangeText={props.handleChange('email')}
              onBlur={props.handleBlur('email')}
              value={props.values.email}
            />
            <Text style={styles.errorText}>{props.touched.email && props.errors.email}</Text>
            <TextInput
              style={props.errors.password ? styles.inputError : styles.input}
              placeholder='Password'
              onChangeText={props.handleChange('password')}
              onBlur={props.handleBlur('password')}
              value={props.values.password}
              secureTextEntry={true}
            />
            <Text style={styles.errorText}>{props.touched.password && props.errors.password}</Text>
            <View style={styles.dbError}>
              {loginError.length > 0 && loginError.map(err => <Text style={styles.errorText} key={err.msg}>{err.msg}</Text>)}
            </View>
            <TouchableOpacity style={styles.button} onPress={props.handleSubmit}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.signUpOption}>
              <Text style={styles.signUpOptionText}>Don't you have an account?</Text>
              <TouchableOpacity
                style={styles.signUpOptionButton}
                onPress={() => navigation.navigate('Register')}>
                <Text style={styles.signUpOptionButtonText}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
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
    marginTop: 40,
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
  signUpOption: {
    flexDirection: 'row',
    justifyContent: "center",
    padding: 10,
    marginTop: 10
  },
  signUpOptionButton: {
    justifyContent: "center",
    marginLeft: 5
  },
  signUpOptionText: {
    alignSelf: "center",
    fontSize: 16,
    color: "#21243D"
  },
  signUpOptionButtonText: {
    color: "#FF6464",
    fontSize: 16,
  },
})

export default Register
