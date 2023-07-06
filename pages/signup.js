import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,

} from 'react-native';
import  {styles} from './styling';
import { useNavigation } from '@react-navigation/native';
 
 function Signup() {

  const [form, setForm] = useState({
    email: '',
    password: '',
  });
    return (
<View >
<Text style={styles.text}>  Hi please fill in your details to sign up</Text>
<View style={styles.container}>
<Text inputLabel>Name</Text>
<TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={email => setForm({ ...form, email })}
              placeholder="John"
              placeholderTextColor="#6b7280"
              value={form.email}
            />

<Text inputLabel>Surname</Text>
<TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={email => setForm({ ...form, email })}
              placeholder="Smith"
              placeholderTextColor="#6b7280"
              value={form.email}
            />

<Text inputLabel>date of birth</Text>
<TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="31-12-2001"
              placeholderTextColor="#6b7280"
              value={form.email}
            />
              <Text inputLabel>Email address</Text>
              <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              placeholder="john@example.com"
              placeholderTextColor="#6b7280"
              value={form.email}
            />
            <Text inputLabel>date</Text>
<TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="31-12-2001"
              placeholderTextColor="#6b7280"
              value={form.email}
            />
              <Text inputLabel>password</Text>
              <TextInput
              onChangeText={password => setForm({ ...form, password })}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              placeholder="********"
              placeholderTextColor="#6b7280"
              value={form.email}
            />
</View>
</View>
    );
  }
  export default Signup;