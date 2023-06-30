import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


function Login() {
  const navigation = useNavigation();

  return (
<SafeAreaView style={{flex: 1, backgroundColor: '#e8ecf4'}}>
  <View style={styles.container}>
    <View style={styles.title}>
      <Text>Welcome to My App</Text>
    </View>

    <View style={styles.form}>
      <View style={styles.input}>
        <Text style={styles.inputLabel}>Email Address</Text>

        <TextInput
        style={styles.inputControl}
        placeholder='example@example.com'
        placeholderTextColor='black'
        // value={form.email}
        // onChangeText={() => }
        />
      </View>

    </View>
    <View style={styles.form}>
      <View style={styles.input}>
        <Text style={styles.inputLabel}>Password</Text>

        <TextInput
        style={styles.inputControl}
        placeholder='############'
        placeholderTextColor='black'
        // value={form.email}
        // onChangeText={() => }
        />
      </View>

    </View>
    
  </View>
</SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    marginVertical: 36,

  },
  title:{
    fontSize: 28,
    fontWeight: '700',
    color: 'black',
    marginBottom: 6,
    textAlign: 'center',
  },
  input:{

  },
  inputLabel:{
    fontSize: 12,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl:{
    backgroundColor: '#fff',
    height: 44,
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222'

  },
  
});