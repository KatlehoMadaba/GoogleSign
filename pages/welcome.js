import React from 'react';
import { View, StyleSheet } from 'react-native';

const Welcome = () => {
    return (
        // <View style={styles.ellipse} />
        <View style={styles.container}>
          <View style={styles.tcontainer}>

          </View>
        </View>
      );
}

export default Welcome;

const styles = StyleSheet.create({
    tcontainer:{
      backgroundColor: '#EFFAF8',
      // width: '375px',
      height: 415,
      top: 9,
      left: 1,
      borderRadius: 160,
    },
    container:{
      backgroundColor: '#FFFFFF',
    },
    ellipse: {
      width: 412.0000046076746,
      height: 263.1404753549872,
      borderRadius: 50, // Use a high value for rounded corners to simulate an ellipse
      top: 105.37548828125,
      left: 70.8203125,
      backgroundColor: '#D9D9D9',
      transform: [{ rotate: '-27.69deg' }], // Apply rotation
      position: 'absolute',
    },
  });