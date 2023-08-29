import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TextInput, TouchableOpacity,Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Login = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/devices');
      setData(response.data);
      console.log(response.data);
      
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignIn = () => {
    try {
        data.map((index) => {
          if (email == index.email && password == index.password) {
            navigation.navigate('Menu')
          } else{
            console.log("error")
            
          }
        })
        
    } catch (error) {
      console.log(error.response.data);
      
    }
  }

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
      <Text style={styles.text}>Login</Text>
      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="#4CAF50" style={styles.icon} />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#4CAF50" style={styles.icon} />

        <TextInput
          autoCorrect={false}
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
        />

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
      style={styles.btnLogin}
      onPress={() => handleSignIn()}
      >
        <Text style={styles.btnTextLogin}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or, login with</Text>
      <View style={styles.socialButtons}>
        <Icon name="google" size={30} color="#DB4437" style={styles.socialIcon} />
        <Icon name="facebook-square" size={30} color="#1877F2" style={styles.socialIcon} />
        <Icon name="apple" size={30} color="black" style={styles.socialIcon} />
      </View>
      <TouchableOpacity 
      style={styles.registerLink}
      onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={styles.registerText}>
          New to this platform? <Text style={styles.registerLinkText}>Register</Text>
        </Text>
      </TouchableOpacity>
    </View>
  </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  textContainer: {
    width: 343,
    height: 524,
    top: 321,
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
  },
  forgotPassword: {
    marginLeft: 'auto',
  },
  forgotPasswordText: {
    color: '#4CAF50',
  },
  btnLogin: {
    width: 300,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 50,
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  btnTextLogin: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  orText: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  socialIcon: {
    marginHorizontal: 10,
  },
  registerLink: {
    marginTop: 20,
    alignItems: 'center',
  },
  registerText: {
    color: '#7D7D7D',
  },
  registerLinkText: {
    color: '#4CAF50',
  },
  icon: {
    marginRight: 10,
  },
});
