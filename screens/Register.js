import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, Button, Image, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectedUserData, userRegister, selectedRegisterSucces, selectedRegisterError } from '../features/users/usersSlice';

const signUpSchema = Yup.object({
  email: Yup.string().email("Email is not valid!").required("Email is required!"),
  username: Yup.string().min(6, "Username must be at lest 6 characters!").required("Username is required!"),
  password: Yup.string().min(6, "Password must be at lest 6 characters!").required("Password is required!"),
  password2: Yup.string().oneOf([Yup.ref('password')], "Passwords must match!").min(6, "Password must be at lest 6 characters!").required("Password confirmation is required!"),
})

const Login = ({ navigation }) => {
  const dispatch = useDispatch()
  const registerSucces = useSelector(selectedRegisterSucces)
  const registerError = useSelector(selectedRegisterError)
  const userData = useSelector(selectedUserData)
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const initialValues = {
    email: email,
    username: username,
    password: password,
    password2: password2
  }

  const handeSubmit = async (values) => {
    dispatch(userRegister(values));
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} style={styles.container}>
      <Image style={{ width: 120, height: 120, marginTop: 20, alignSelf: 'center' }} source={require('../assets/homeLogo.png')} />
      <Formik
        initialValues={initialValues}
        onSubmit={values => handeSubmit(values)}
        validationSchema={signUpSchema}
      // validateOnChange={false}
      // validateOnBlur={false}
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
              style={props.errors.username ? styles.inputError : styles.input}
              placeholder='Username'
              onChangeText={props.handleChange('username')}
              onBlur={props.handleBlur('username')}
              value={props.values.username}
            />
            <Text style={styles.errorText}>{props.touched.username && props.errors.username}</Text>
            <TextInput
              style={props.errors.password ? styles.inputError : styles.input}
              placeholder='Password'
              onChangeText={props.handleChange('password')}
              onBlur={props.handleBlur('password')}
              value={props.values.password}
              secureTextEntry={true}
            />
            <Text style={styles.errorText}>{props.touched.password && props.errors.password}</Text>
            <TextInput
              style={props.errors.password2 ? styles.inputError : styles.input}
              placeholder='Confirm Password'
              onChangeText={props.handleChange('password2')}
              onBlur={props.handleBlur('password2')}
              value={props.values.password2}
              secureTextEntry={true}
            />
            <Text style={styles.errorText}>{props.touched.password2 && props.errors.password2}</Text>
            <View style={styles.dbError}>
              {registerError.length > 0 && registerError.map(err => <Text style={styles.errorText} key={err.msg}>{err.msg}</Text>)}
            </View>
            <TouchableOpacity style={styles.button} onPress={props.handleSubmit}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.signUpOption}>
              <Text style={styles.signUpOptionText}>Already have an account?</Text>
              <TouchableOpacity
                style={styles.signUpOptionButton}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.signUpOptionButtonText}>
                  Log in
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
  dbError: {
    alignItems: 'center'
  },
  succesText: {
    fontSize: 14,
    paddingVertical: 0,
    color: '#13C767'
  },
})

export default Login
