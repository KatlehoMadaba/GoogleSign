import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState, useEffect } from 'react';
import { TextInput, TouchableOpacity,Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Signup = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    name: '',
    surname: '',
    dateofbirth: '',
    email: '',
    password: '',
  });

  useEffect(()=>{
    console.log(form)
  },[form])

  const handleValidation = () => {
    if (
      form.name.trim() === '' ||
      form.surname.trim() === '' ||
      form.dateofbirth.trim() === '' ||
      form.email.trim() === '' ||
      form.password.trim() === ''
    ) {
      Alert.alert('Error', 'Please fill in all fields.');
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/device', form);
      console.log('new: ', response.data); 

    Alert.alert('Success', 'You have been successfully signed up.');
    setForm({
      name: '',
      surname: '',
      dateofbirth: '',
      email: '',
      password: '',
    });
    navigation.navigate('Menu')
    console.log("successful")
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const imageStyle = {
    width: 342,
    height: 239,
    top: 31,
    left: 30,
    position: 'absolute',
  };

  return (
    <View style={styles.container}>
      <Image source={require('../images/undraw.png')} style={imageStyle} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Signup</Text>
        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="#4CAF50" style={styles.icon} />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            placeholder="Name"
            onChangeText={name => setForm({ ...form, name })}
            value={form.name}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="#4CAF50" style={styles.icon} />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            placeholder="Surname"
            onChangeText={surname => setForm({ ...form, surname })}
            value={form.surname}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="calendar" size={20} color="#4CAF50" style={styles.icon} />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            placeholder="Date of Birth (yyyy/mm/dd)"
            onChangeText={dateofbirth => setForm({ ...form, dateofbirth })}
            value={form.dateofbirth}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="envelope" size={20} color="#4CAF50" style={styles.icon} />
          <TextInput
            autoCapitalize="none"
            keyboardType="email-address"
            autoCorrect={false}
            style={styles.input}
            placeholder="Email"
            onChangeText={email => setForm({ ...form, email })}
            value={form.email}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#4CAF50" style={styles.icon} />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={password => setForm({ ...form, password })}
            value={form.password}
          />
        </View>
        <TouchableOpacity 
      style={styles.btnSignUp}
      onPress={() => handleValidation()}
      >
        <Text style={styles.btnTextSignUp}>SignUp</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Signup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  textContainer: {
    width: 342,
    height: 534,
    top: 279,
    left: 30,
    position: 'absolute',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    padding: 20,
  },
  text: {
    fontWeight: 600,
    fontSize: 30,
    color: '#141414',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 20,
    marginTop: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#7D7D7D',
    padding: 20,
  },
  btnSignUp: {
    width: 300,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 50,
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  btnTextSignUp: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});