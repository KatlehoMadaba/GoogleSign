import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Form from '../component/form'

const Questions = () => {
  return (
    <View>
      <Form/>
    </View>
  )
}

export default Questions

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  