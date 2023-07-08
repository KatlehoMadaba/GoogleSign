import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import  {styles} from './styling';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
 
 function Signup() {
    const [form, setForm] = useState({
      name:'',
      surname:'',
      username:'',
      dateofbirth:'',
      email: '',
      password:'',
    });
    const handleSubmit= (fieldName, value) => {
      setForm({
        ...form,
        [fieldName]: value,
      });
    };
  axios
      .post('', form)
      .then((response) => {
        console.log('Form submitted successfully');
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
    return (
<View >
<Text style={styles.text}>Hi please fill in your details to sign up</Text>
<View style={styles.container}>
<Text inputLabel>Name</Text>
<TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              placeholder="John"
              placeholderTextColor="#6b7280"
              value={form.name}
              onChangeText={(value) =>handleSubmit('name', value)}
            />

<Text inputLabel>Surname</Text>
<TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              placeholder="Smith"
              placeholderTextColor="#6b7280"
              value={form.surname}
              onChangeText={(value) =>handleSubmit('surname', value)}
            />
<Text inputLabel>username</Text>
<TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              placeholder="Smith"
              placeholderTextColor="#6b7280"
              value={form.username}
              onChangeText={(value) =>handleSubmit('username', value)}
            />
<Text inputLabel>date of birth</Text>
<TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="31-12-2001"
              placeholderTextColor="#6b7280"
              value={form.dateofbirth}
              onChangeText={(value) =>handleSubmit('dateofbirth', value)}
            />
              <Text inputLabel>Email address</Text>
              <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              placeholder="john@example.com"
              placeholderTextColor="#6b7280"
              value={form.email}
              onChangeText={(value) =>handleSubmit('email', value)}
            />
              <Text inputLabel>password</Text>
              <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              placeholder="********"
              placeholderTextColor="#6b7280"
              value={form.password}
              onChangeText={(value) =>handleSubmit('password', value)}
            />
        <Button title="Submit" onPress={handleSubmit} />
</View>
</View>
    );
  }
  export default Signup;